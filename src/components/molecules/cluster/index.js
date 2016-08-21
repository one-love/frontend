import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import ClusterIcon from 'material-ui/svg-icons/file/cloud-queue';
import actions from './actions/remove';
import styles from '../../atoms/icon/styles';


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});


const Cluster = React.createClass({
  propTypes: {
    cluster: React.PropTypes.object.isRequired,
    confirm: React.PropTypes.func.isRequired,
  },

  handleClose(event) {
    event.preventDefault();
    this.props.confirm(this.props.cluster.id);
  },

  render() {
    return (
      <Paper style={styles.paper}>
        <div style={styles.close} onClick={this.handleClose}>x</div>
        <ClusterIcon color={styles.icon.color} style={styles.icon} />
        <div>{this.props.cluster.name}</div>
      </Paper>
    );
  },
});


export default connect(mapStateToProps, actions)(Cluster);
