import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/provider';
import store from '../../store';
import { Link } from 'react-router';


const mapStateToProps = state => ({
  provider: state.providerDetail.provider,
  applications: state.providerDetail.applications,
  roles: state.providerDetail.roles,
});


const Provider = React.createClass({
  propTypes: {
    provider: React.PropTypes.object,
    applications: React.PropTypes.array,
    roles: React.PropTypes.array,
    params: React.PropTypes.object,

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
    const clusterId = this.props.params.clusterId;
    const providerName = this.props.params.providerName;
    if (this.props.provider === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <h2>Provider {providerName}</h2>
        <Link to={`/clusters/${clusterId}/providers/${providerName}/edit/`}>
          Edit
        </Link>
        <Link to={`/clusters/${clusterId}/providers/${providerName}/remove/`}>
          Remove
        </Link>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(Provider);
