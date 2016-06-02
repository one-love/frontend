import React from 'react';
import InlineEdit from 'react-edit-inline';
import { connect } from 'react-redux';
import actions from '../actions/detail';
import editActions from '../actions/edit';
import store from '../../../store';
import remove from '../components/remove';
import createApp from './application/components/create';
import removeApp from './application/components/remove';
import editApp from './application/components/edit';
import ApplicationList from './application';
import { Link } from 'react-router';

const mapStateToProps = (state) => {
  const data = {
    service: state.serviceDetail.service,
  };
  if (state.serviceEdit.service) {
    data.service = state.serviceEdit.service;
  }
  return data;
};


const ServiceDetail = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    service: React.PropTypes.object,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.serviceId));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  dataChanged(data) {
    store.dispatch(
      editActions.edit(
        this.props.params.serviceId,
        data,
      ),
    );
  },

  render() {
    if (this.props.service === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <ul className="item__list">
          <li className="item__heading">
            Name:
            <InlineEdit
              paramName="name"
              text={this.props.service.name}
              change={this.dataChanged}
            />
          </li>
          <li className="item__child">
            Author: {this.props.service.user.email}
          </li>
          <ApplicationList
            applications={this.props.service.applications}
            serviceId={this.props.service.id}
          />

        </ul>
        <Link to={`/services/${this.props.params.serviceId}/remove/`}>
          Remove
        </Link>
        <Link to={`/services/${this.props.params.serviceId}/applications/create/`}>
          Create Application
        </Link>
      </div>
    );
  },
});


const routes = {
  path: ':serviceId',
  indexRoute: { component: connect(mapStateToProps, actions)(ServiceDetail) },
  childRoutes: [
    remove,
    createApp,
    removeApp,
    editApp,
  ],
};

export default routes;
