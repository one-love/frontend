import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import ProviderIcon from 'material-ui/svg-icons/device/storage';
import actions from './actions/remove';


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
    const styles = {
      paper: {
        height: 120,
        width: 120,
        borderRadius: 10,
        textAlign: 'center',
        margin: 3,
      },

      close: {
        marginLeft: 100,
      },

      icon: {
        height: '60%',
        width: '100%',
      },
    };
    return (
      <Paper style={styles.paper}>
        <div style={styles.close} onClick={this.handleClose}>x</div>
        <ProviderIcon color="#ccc" style={styles.icon} />
        <div>{this.props.name}</div>
      </Paper>
    );
  },
});


export default connect(mapStateToProps, actions)(Provider);
