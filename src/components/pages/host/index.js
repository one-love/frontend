import React from 'react';
import { connect } from 'react-redux';
import actions from './actions/detail';
import editActions from './actions/edit';


const mapStateToProps = (state) => ({
  host: state.hostDetail.host,
});


const HostDetail = React.createClass({
  propTypes: {
    host: React.PropTypes.object,
    params: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
  },

  componentWillMount() {
    this.props.dispatch(
      actions.get(
        this.props.params.clusterId,
        this.props.params.providerName,
        this.props.params.hostName,
      ));
  },

  componentWillUnmount() {
    this.props.dispatch(actions.reset());
    this.props.dispatch(editActions.reset());
  },

  render() {
    if (!this.props.host) { return <div />; }
    return (
      <div>
        <h2>Host</h2>
        <div>
          IP: {this.props.host.ip}
        </div>
        <div>
          hostname: {this.props.host.hostname}
        </div>
      </div>
    );
  },
});


const routes = {
  path: 'hosts/:hostName',
  indexRoute: {
    component: connect(mapStateToProps)(HostDetail),
  },
};

export default routes;
