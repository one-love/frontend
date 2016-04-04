import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/detail';
import store from '../../../store';
import remove from '../components/remove';
import edit from '../components/edit';
import createApp from './application/components/create';
import removeApp from './application/components/remove';
import editApp from './application/components/edit';
import ApplicationList from './application';
import { Link } from 'react-router';

const mapStateToProps = (state) => {
  const data = {
    service: state.serviceDetail.service,
  };
  return data;
};


const Component = React.createClass({
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

  render() {
    if (this.props.service === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <ul className="item__list">
          <li className="item__heading">
            Name: {this.props.service.name}
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
        <Link to={`/services/${this.props.params.serviceId}/edit/`}>
          Edit
        </Link>
        <Link to={`/services/${this.props.params.serviceId}/applications/create/`}>
          Create Application
        </Link>
      </div>
    );
  },
});

export const Detail = connect(mapStateToProps, actions)(Component);

const routes = {
  path: ':serviceId',
  indexRoute: { component: Detail },
  childRoutes: [
    remove,
    edit,
    createApp,
    removeApp,
    editApp,
  ],
};

export default routes;
