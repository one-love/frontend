import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import actions from './actions';
import { socketio } from '../../utils';


const mapStateToProps = (state) => ({
  notifications: state.notifications.notifications,
  notificationsOpen: state.notifications.open,
  socketUrl: state.backend.socketUrl,
});


const App = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    notifications: React.PropTypes.node,
    notificationsOpen: React.PropTypes.bool,
    close: React.PropTypes.func.isRequired,
    setBackendUrl: React.PropTypes.func.isRequired,
  },

  childContextTypes: {
    socket: React.PropTypes.object,
  },

  getChildContext() {
    // eslint-disable-next-line no-undef
    const hostname = window.location.hostname;
    const socketUrl = `http://${hostname}:5000/onelove`;
    return {
      socket: socketio(socketUrl),
    };
  },

  componentWillMount() {
    // eslint-disable-next-line no-undef
    const hostname = window.location.hostname;
    this.props.setBackendUrl(hostname);
  },

  handleNotificationClose() {
    this.props.close();
  },

  render() {
    return (
      <div>
        {this.props.children}
        <Snackbar
          open={this.props.notificationsOpen}
          message={this.props.notifications}
          autoHideDuration={5000}
          action="close"
          onActionTouchTap={this.handleNotificationClose}
          onRequestClose={this.handleNotificationClose}
        />
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(App);
