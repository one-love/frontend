import React from 'react';
import LogoutIcon from 'material-ui/svg-icons/action/input';
import MenuItem from 'material-ui/MenuItem';
import { history, postLogoutURL } from '../../../constants';


const styles = {
  settings: {
    item: {
      cursor: 'pointer',
    },
  },
};


const Settings = React.createClass({
  handleLogout() {
    window.localStorage.removeItem('OneLoveAuthToken');
    history.push(postLogoutURL);
  },

  render() {
    return (
      <MenuItem
        primaryText="Logout"
        leftIcon={<LogoutIcon />}
        onTouchTap={this.handleLogout}
        style={styles.settings.item}
      />
    );
  },
});


export default Settings;
