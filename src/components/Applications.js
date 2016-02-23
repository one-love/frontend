import React from 'react';
import { connect } from 'react-redux';
import { get, actions } from '../actions/application/list';
import store from '../store';


const mapStateToProps = state => ({
  applications: state.applications.applications,
  error: state.applications.error,
});

const ApplicationList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    applications: React.PropTypes.array,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(get(this.props.params.clusterId));
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
                <div>Name: {application.name}</div>
                <div>Role: {application.galaxy_role}</div>
              </li>
            )
          }
        </ul>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(ApplicationList);
