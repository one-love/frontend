import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import ApplicationIcon from 'material-ui/svg-icons/action/dashboard';
import actions from './actions/remove';
import styles from '../../atoms/icon/styles';


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});


const Application = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    serviceId: React.PropTypes.string.isRequired,
    confirm: React.PropTypes.func.isRequired,
  },

  handleClose(event) {
    event.preventDefault();
    const { serviceId, name } = this.props;
    const serviceUrl = `services/${serviceId}`;
    const url = `${serviceUrl}/applications/${name}`;
    this.props.confirm(url);
  },

  render() {
    return (
      <Paper style={styles.paper}>
        <div style={styles.close} onClick={this.handleClose}>x</div>
        <ApplicationIcon color={styles.icon.color} style={styles.icon} />
        <div>{this.props.name}</div>
      </Paper>
    );
  },
});


export default connect(mapStateToProps, actions)(Application);
