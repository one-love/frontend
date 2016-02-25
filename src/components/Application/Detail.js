import React from 'react';
import { connect } from 'react-redux';
import actions from './actions/detail';
import store from '../../store';
import { Link } from 'react-router';


const mapStateToProps = state => ({
  application: state.applicationDetail.application,
  applications: state.applicationDetail.applications,
  roles: state.applicationDetail.roles,
});


const Application = React.createClass({
  propTypes: {
    application: React.PropTypes.object,
    applications: React.PropTypes.array,
    roles: React.PropTypes.array,
    params: React.PropTypes.object,

  },

  componentWillMount() {
    store.dispatch(actions.get(
      this.props.params.clusterId,
      this.props.params.applicationName
    ));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    const clusterId = this.props.params.clusterId;
    const applicationName = this.props.params.applicationName;
    if (this.props.application === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <h2>Application {applicationName}</h2>
        <Link to={`/clusters/${clusterId}/applications/${applicationName}/edit/`}>
          Edit
        </Link>
        <Link to={`/clusters/${clusterId}/applications/${applicationName}/remove/`}>
          Remove
        </Link>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(Application);
