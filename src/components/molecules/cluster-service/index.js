import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import ServiceIcon from 'material-ui/svg-icons/action/build';
import actions from './actions/remove';
import styles from '../../atoms/icon/styles';


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});


export const ClusterService = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    clusterId: React.PropTypes.string.isRequired,
    serviceId: React.PropTypes.string.isRequired,
    confirm: React.PropTypes.func.isRequired,
  },

  handleClose(event) {
    event.preventDefault();
    const clusterUrl = `clusters/${this.props.clusterId}`;
    const url = `${clusterUrl}/services/${this.props.serviceId}`;
    this.props.confirm(url);
  },

  render() {
    return (
      <Paper style={styles.paper}>
        <div style={styles.close} onClick={this.handleClose}>x</div>
        <ServiceIcon color={styles.icon.color} style={styles.icon} />
        <div>{this.props.name}</div>
      </Paper>
    );
  },
});


export default connect(mapStateToProps, actions)(ClusterService);
