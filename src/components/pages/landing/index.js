import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import clusterActions from '../cluster-list/actions';
import provisionActions from '../provision-list/actions';
import serviceActions from '../service-list/actions';


const mapStateToProps = (state) => ({
  clusters: state.clusterList.clusters,
  clusterStatus: state.clusterList.status,
  services: state.serviceList.services,
  serviceStatus: state.serviceList.status,
  provisions: state.provisionList.provisions,
  provisionStatus: state.provisionList.status,
});


const Landing = React.createClass({
  propTypes: {
    clusters: React.PropTypes.array,
    clusterStatus: React.PropTypes.string,
    services: React.PropTypes.array,
    serviceStatus: React.PropTypes.string,
    provisions: React.PropTypes.array,
    provisionStatus: React.PropTypes.string,
    dispatch: React.PropTypes.func.isRequired,
  },

  componentWillMount() {
    this.props.dispatch(clusterActions.get());
    this.props.dispatch(serviceActions.get());
    this.props.dispatch(provisionActions.get());
  },

  componentWillUnmount() {
    this.props.dispatch(clusterActions.reset());
  },

  render() {
    const styles = {
      paper: {
        width: '100px',
        height: '100px',
        lineHeight: '90px',
        display: 'inline-block',
        marginRight: '5px',
        borderRadius: '10px',
        padding: '5px',
        textAlign: 'center',
      },

      title: {
        marginBottom: '5px',
      },
    };
    if (!this.props.clusters || !this.props.services || !this.props.provisions) {
      return (<div />);
    }
    if (this.props.clusters.length) {
      return (
        <div>
          <h1 style={styles.title}>Dashboard</h1>
          <Link to="/clusters/">
            <Paper style={styles.paper}>
              clusters: {this.props.clusters.length}
            </Paper>
          </Link>
          <Link to="/services/">
            <Paper style={styles.paper}>
              services: {this.props.services.length}
            </Paper>
          </Link>
          <Link to="/provisions/">
            <Paper style={styles.paper}>
              provisions: {this.props.provisions.length}
            </Paper>
          </Link>
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
