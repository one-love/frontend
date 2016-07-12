/* eslint react/no-is-mounted: 0 */
import React from 'react';
import { connect } from 'react-redux';
import Provision from '../../molecules/provision';
import store from '../../../store';
import actions from './actions/detail';
import editActions from './actions/edit';
import { socketio } from '../../../utils';


const mapStateToProps = (state) => {
  const data = {
    provision: state.provisionDetail.provision,
    error: state.provisionDetail.error,
  };
  if (data.error) {
    data.provision.status = data.error;
  }
  return data;
};


const ProvisionDetail = React.createClass({
  propTypes: {
    provision: React.PropTypes.object,
    params: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      provision: {
        logs: [],
      },
    };
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.provisionId));
  },

  componentDidMount() {
    socketio().on('provision', message => {
      if (this.props.provision.id === message.id) {
        switch (message.status) {
          case 'SUCCESS':
            store.dispatch(actions.success(message.status));
            break;
          case 'FAILED':
            store.dispatch(
              actions.failProvision(this.props.provision, message.status)
            );
            break;
          default:
            store.dispatch(
              actions.failProvision(this.props.provision, 'unexpected error on provision')
            );
            break;
        }
      }
    });
    socketio().on('log', message => {
      const provision = this.props.provision;
      provision.logs.push(message);
      if (this.isMounted()) {
        this.setState({ provision });
      }
    });
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
    store.dispatch(editActions.reset());
  },

  render() {
    return (<Provision provision={this.props.provision} />);
  },
});

const routes = {
  path: ':provisionId',
  indexRoute: {
    component: connect(mapStateToProps, actions)(ProvisionDetail),
  },
};

export default routes;
