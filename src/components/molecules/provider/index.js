import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import ProviderIcon from 'material-ui/svg-icons/device/storage';
import actions from './actions/remove';
import styles from '../../atoms/icon/styles';


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});


const Provider = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    clusterId: React.PropTypes.string.isRequired,
    confirm: React.PropTypes.func.isRequired,
  },

  handleClose(event) {
    event.preventDefault();
    const clusterId = this.props.clusterId;
    const name = this.props.name;
    const id = `clusters/${clusterId}/providers/${name}`;
    this.props.confirm(id);
  },

  render() {
    return (
      <Paper style={styles.paper}>
        <div style={styles.close} onClick={this.handleClose}>x</div>
        <ProviderIcon color={styles.icon.color} style={styles.icon} />
        <div>{this.props.name}</div>
      </Paper>
    );
  },
});


export default connect(mapStateToProps, actions)(Provider);
