import React from 'react';
import InlineEdit from 'react-edit-inline';
import { connect } from 'react-redux';
import actions from '../actions/detail';
import editActions from '../actions/edit';
import store from '../../../store';
import { Link } from 'react-router';
import edit from './edit';
import remove from './remove';
import provider from './provider';
import service from './service/components/add-service';
import ServiceComponent from './service';
import removeService from '../components/service/components/remove';
import provision from '../components/service/components/provision';


const mapStateToProps = (state) => {
  const data = {
    cluster: state.clusterDetail.cluster,
    roles: state.clusterDetail.roles,
  };
  return data;
};


const Component = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    cluster: React.PropTypes.object,
    roles: React.PropTypes.array,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.clusterId));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  dataChanged(data) {
    store.dispatch(
      editActions.edit(
        this.props.params.clusterId,
        data
      )
    );
  },

  render() {
    if (this.props.cluster === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <ul className="item__list">
          <li className="item__heading">
            Name:
            <InlineEdit
              paramName="name"
              text={this.props.cluster.name}
              change={this.dataChanged}
            />
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
          <li className="item__child">
              <b className="item__fragment item__fragment--bold">Services: </b>
              <span className="item__value">{
                  this.props.cluster.services.length ?
                  this.props.cluster.services.map(
                    (serv) =>
                        <ServiceComponent
                          clusterId={this.props.params.clusterId}
                          name={serv.name}
                          serviceId={serv.id}
                          username={serv.user.username}
                          key={serv.id}
                        />
                  ) :
                  'No service right now'
              }</span>
          </li>
        </ul>
        <Link to={`/clusters/${this.props.params.clusterId}/edit/`}>
          Edit
        </Link>
        <Link to={`/clusters/${this.props.params.clusterId}/remove/`}>
          Remove
        </Link>
        <Link to={`/clusters/${this.props.params.clusterId}/service/`}>
          Add Service
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
    service,
    removeService,
    provision,
  ],
};

export default routes;
