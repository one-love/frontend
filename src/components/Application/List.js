import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from './actions/list';
import store from '../../store';


const mapStateToProps = state => ({
  applications: state.applicationList.applications,
  status: state.applicationList.status,
});

const ApplicationList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    params: React.PropTypes.object,
    applications: React.PropTypes.array,
    status: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.clusterId));
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
                to={`/clusters/${this.props.params.clusterId}/applications/${application.name}/`}
                application={application}
              > {application.name} </Link> </li>
            )
          }
        </ul>
        <Link to={`/clusters/${this.props.params.clusterId}/applications/create/`}>Create</Link>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(ApplicationList);

