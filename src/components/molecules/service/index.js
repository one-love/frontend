import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import ServiceIcon from 'material-ui/svg-icons/action/build';
import actions from './actions/remove';
import styles from '../../atoms/icon/styles';


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});


export const Service = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    serviceId: React.PropTypes.string.isRequired,
    confirm: React.PropTypes.func.isRequired,
  },

  handleClose(event) {
    event.preventDefault();
    this.props.confirm(this.props.serviceId);
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


export default connect(mapStateToProps, actions)(Service);
