import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from './actions/list';
import store from '../../../../../../store';
import create from './components/create';
import detail from './components/detail';


const mapStateToProps = state => ({
  hosts: state.hostList.hosts,
  status: state.hostList.status,
});

const HostList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    params: React.PropTypes.object,
    hosts: React.PropTypes.array,
    status: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(actions.get(
      this.props.params.clusterId,
      this.props.params.providerName
    ));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    let createLink = `/clusters/${this.props.params.clusterId}`;
    createLink += `/providers/${this.props.params.providerName}`;
    createLink += '/hosts/create/';

    return (
      <div>
        <h2>My hosts:</h2>
        <ul>
          {
            this.props.hosts.map(
              host => {
                let detailLink = `/clusters/${this.props.params.clusterId}`;
                detailLink += `/providers/${this.props.params.providerName}`;
                detailLink += `/hosts/${host.hostname}/`;
                return (
                  <li key={host.hostname}>
                    <Link
                      key={host.hostname}
                      to={detailLink}
                      host={host}
                    > {host.hostname} </Link>
                  </li>
                );
              }
            )
          }
        </ul>
        <Link to={createLink}>Create</Link>
      </div>
    );
  },
});


const routes = {
  path: 'hosts',
  indexRoute: { component: connect(mapStateToProps, actions)(HostList) },
  childRoutes: [
    create,
    detail,
  ],
};

export default routes;
