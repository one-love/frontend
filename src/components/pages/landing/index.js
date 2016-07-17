import React from 'react';
import { connect } from 'react-redux';
import store from '../../../store';
import clusterActions from '../cluster-list/actions';
import serviceActions from '../service-list/actions';


const mapStateToProps = (state) => ({
  clusters: state.clusterList.clusters,
  services: state.serviceList.services,
});


const Landing = React.createClass({
  propTypes: {
    clusters: React.PropTypes.array,
    services: React.PropTypes.array,
  },

  componentWillMount() {
    store.dispatch(clusterActions.get());
    store.dispatch(serviceActions.get());
  },

  componentWillUnmount() {
    store.dispatch(clusterActions.reset());
  },

  render() {
    if (!this.props.clusters || !this.props.services) {
      return (<div></div>);
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
    }
    return (
      <div>
        <h1>Would you like to create your first cluster and service?</h1>
      </div>
    );
  },
});


export default connect(mapStateToProps, clusterActions)(Landing);
