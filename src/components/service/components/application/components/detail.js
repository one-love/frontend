import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/detail';
import store from '../../../../../store';
import { Link } from 'react-router';
import edit from './edit';
import remove from './remove';


const mapStateToProps = state => ({
  application: state.applicationDetail.application,
  applications: state.applicationDetail.applications,
  roles: state.applicationDetail.roles,
});


const Component = React.createClass({
  propTypes: {
    application: React.PropTypes.object,
    applications: React.PropTypes.array,
    roles: React.PropTypes.array,
    params: React.PropTypes.object,

  },

  componentWillMount() {
    store.dispatch(actions.get(
      this.props.params.serviceId,
      this.props.params.applicationName
    ));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    const serviceId = this.props.params.serviceId;
    const applicationName = this.props.params.applicationName;
    if (this.props.application === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <h2>Application {applicationName}</h2>
        <Link to={`/services/${serviceId}/applications/${applicationName}/edit/`}>
          Edit
        </Link>
        <Link to={`/services/${serviceId}/applications/${applicationName}/remove/`}>
          Remove
        </Link>
      </div>
    );
  },
});

export const Detail = connect(mapStateToProps, actions)(Component);

const routes = {
  path: ':applicationName',
  indexRoute: { component: Detail },
  childRoutes: [
    edit,
    remove,
  ],
};

export default routes;
