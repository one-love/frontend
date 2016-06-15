import React from 'react';
import actions from '../actions/detail';
import store from '../../../store';
import { connect } from 'react-redux';
import { socketio } from '../../../utils';

const mapStateToProps = (state) => {
  const data = {
    provision: state.provisionDetail.provision,
  };
  return data;
};

const ProvisionDetail = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    provision: React.PropTypes.object,
    status: React.PropTypes.string,
  },

  getInitialState() {
    return {
      provisions: [],
    };
  },

  componentWillMount() {
    const self = this;
    store.dispatch(actions.get(self.props.params.provisionId));
  },

  componentDidMount() {
    socketio().on('provision', message => {
      const provision = this.props.provision;
      if (provision && provision.id === message.id) {
        switch (message.status) {
          case 'SUCCESS':
            store.dispatch(actions.success(message));
            break;
          case 'FAILURE':
            store.dispatch(actions.fail(message));
            break;
          default:
            store.dispatch(actions.fail('unexpected error on provision'));
            break;
        }
      }
    });
    socketio().on('log', message => {
      const provision = this.props.provision;
      if (provision && provision.id === message.id) {
        const tmp = this.state.provisions;
        tmp.push(message);
        this.setState({ provisions: tmp });
      }
    });
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    if (this.props.provision === undefined) {
      return <div></div>;
    }
    const provisions = (
      <div className="provisions">{
        this.state.provisions.map(provision => {
          let logItem = '';
          if (provision.status === 'failed' || provision.status === 'unreachable') {
            logItem = `: ${provision.log}`;
          }
          const provisionList = (
            <div key={provision.timestamp} className={provision.status}>
              [{provision.host}] {provision.task}{logItem}
            </div>
          );
          return provisionList;
        })
      }</div>
    );
    const index = (
      <div>
        <h4 className={this.props.provision.status}>{this.props.provision.status}</h4>
        {provisions}
      </div>
    );
    return index;
  },
});


const routes = {
  indexRoute: { component: connect(mapStateToProps, actions)(ProvisionDetail) },
  path: ':provisionId',
};

export default routes;
