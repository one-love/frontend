import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import HostIcon from 'material-ui/svg-icons/hardware/memory';
import actions from './actions/remove';
import styles from '../../atoms/icon/styles';


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});


const Application = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    clusterId: React.PropTypes.string.isRequired,
    providerName: React.PropTypes.string.isRequired,
    confirm: React.PropTypes.func.isRequired,
  },

  handleClose(event) {
    event.preventDefault();
    const { clusterId, providerName, name } = this.props;
    const clusterUrl = `clusters/${clusterId}`;
    const providerUrl = `${clusterUrl}/providers/${providerName}`;
    const url = `${providerUrl}/hosts/${name}`;
    this.props.confirm(url);
  },

  render() {
    return (
      <Paper style={styles.paper}>
        <div style={styles.close} onClick={this.handleClose}>x</div>
        <HostIcon color={styles.icon.color} style={styles.icon} />
        <div>{this.props.name}</div>
      </Paper>
    );
  },
});


export default connect(mapStateToProps, actions)(Application);
