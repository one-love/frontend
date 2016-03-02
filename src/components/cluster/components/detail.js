import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/detail';
import store from '../../../store';
import { Link } from 'react-router';
import edit from './edit';
import remove from './remove';
import provider from './provider';
import application from './application';


const mapStateToProps = (state) => {
  const data = {
    cluster: state.clusterDetail.cluster,
    applications: state.clusterDetail.applications,
    roles: state.clusterDetail.roles,
  };
  return data;
};


const Component = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    cluster: React.PropTypes.object,
    applications: React.PropTypes.array,
    roles: React.PropTypes.array,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.clusterId));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    if (this.props.cluster === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <ul className="item__list">
          <li className="item__heading">Name: {this.props.cluster.name}</li>
          <li className="item__child">
            <Link to={`/clusters/${this.props.params.clusterId}/applications/`}>
              Applications
            </Link>
          </li>
          <li className="item__child">
            <Link to={`/clusters/${this.props.params.clusterId}/providers/`}>
              Providers
            </Link>
          </li>
          <li className="item__child">
              <b className="item__fragment item__fragment--bold">Roles: </b>
              <span className="item__value">{
                  this.props.cluster.roles.length ?
                  this.props.cluster.roles.map(
                    (role) => <span key={role.name}>{role.name} </span>
                  ) :
                  'No roles right now'
              }</span>
          </li>
        </ul>
        <Link to={`/clusters/${this.props.params.clusterId}/edit/`}>
          Edit
        </Link>
        <Link to={`/clusters/${this.props.params.clusterId}/remove/`}>
          Remove
        </Link>
      </div>
    );
  },
});

export const Detail = connect(mapStateToProps, actions)(Component);

const routes = {
  path: ':clusterId',
  indexRoute: { component: Detail },
  childRoutes: [
    edit,
    remove,
    provider,
    application,
  ],
};

export default routes;
