import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from './actions/list';
import store from '../../../../store';
import create from './components/create';
import detail from './components/detail';


const mapStateToProps = state => ({
  applications: state.applicationList.applications,
  status: state.applicationList.status,
});

const Component = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    params: React.PropTypes.object,
    applications: React.PropTypes.array,
    status: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.serviceId));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    return (
      <div>
        <h2>My applications:</h2>
        <ul>
          {
            this.props.applications.map(
              application =>
              <li key={application.name}>
              <Link
                key={application.id}
                to={`/services/${this.props.params.serviceId}/applications/${application.name}/`}
                application={application}
              > {application.name} </Link> </li>
            )
          }
        </ul>
        <Link to={`/services/${this.props.params.serviceId}/applications/create/`}>Create</Link>
      </div>
    );
  },
});

export const List = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'applications',
  indexRoute: { component: List },
  childRoutes: [
    create,
    detail,
  ],
};

export default routes;
