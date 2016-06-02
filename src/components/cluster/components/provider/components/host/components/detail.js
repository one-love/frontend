import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/detail';
import store from '../../../../../../../store';
import { Link } from 'react-router';
import edit from './edit';
import remove from './remove';


const mapStateToProps = state => ({
  host: state.hostDetail.host,
  hosts: state.hostDetail.hosts,
  roles: state.hostDetail.roles,
});


const HostDetail = React.createClass({
  propTypes: {
    host: React.PropTypes.object,
    hosts: React.PropTypes.array,
    roles: React.PropTypes.array,
    params: React.PropTypes.object,

  },

  componentWillMount() {
    store.dispatch(actions.get(
      this.props.params.clusterId,
      this.props.params.providerName,
      this.props.params.hostname
    ));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    const clusterId = this.props.params.clusterId;
    const providerName = this.props.params.providerName;
    const hostName = this.props.params.hostname;
    if (this.props.host === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <h2>Host {hostName}</h2>
        <Link to={`/clusters/${clusterId}/providers/${providerName}/hosts/${hostName}/edit/`}>
          Edit
        </Link>
        <Link to={`/clusters/${clusterId}/providers/${providerName}/hosts/${hostName}/remove/`}>
          Remove
        </Link>
      </div>
    );
  },
});


const routes = {
  path: ':hostname',
  indexRoute: { component: connect(mapStateToProps, actions)(HostDetail) },
  childRoutes: [
    edit,
    remove,
  ],
};

export default routes;
