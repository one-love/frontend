import React from 'react';
import { connect } from 'react-redux';
import clusterActions from '../cluster-list/actions';
import serviceActions from '../service-list/actions';


const mapStateToProps = (state) => ({
  clusters: state.clusterList.clusters,
  clusterStatus: state.clusterList.status,
  services: state.serviceList.services,
  serviceStatus: state.serviceList.status,
});


const Landing = React.createClass({
  propTypes: {
    clusters: React.PropTypes.array,
    clusterStatus: React.PropTypes.string,
    services: React.PropTypes.array,
    serviceStatus: React.PropTypes.string,
    dispatch: React.PropTypes.func.isRequired,
  },

  componentWillMount() {
    this.props.dispatch(clusterActions.get());
    this.props.dispatch(serviceActions.get());
  },

  componentWillUnmount() {
    this.props.dispatch(clusterActions.reset());
  },

  render() {
    if (!this.props.clusters || !this.props.services) {
      return (<div />);
    }
    if (this.props.clusters.length) {
      return (
        <div>
          <h1>Dashboard</h1>
          <div>
            clusters: {this.props.clusters.length}
          </div>
          <div>
            services: {this.props.services.length}
          </div>
        </div>
      );
    } else if (this.props.clusterStatus === 'success') {
      return (
        <div>
          <h1>Would you like to create your first cluster and service?</h1>
        </div>
      );
    }
    return (<div />);
  },
});


export default connect(mapStateToProps)(Landing);
