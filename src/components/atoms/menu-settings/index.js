import React from 'react';
import gear from './gear.svg';
import cssModules from 'react-css-modules';
import store from '../../../store';
import actions from '../sidebar/actions';
import styles from './menu-settings.scss';


const MenuSettings = React.createClass({
  onClick() {
    store.dispatch(actions.showSidebar(true));
  },

  render() {
    return (
      <li styleName="menu-settings" onClick={this.onClick}>
        <div>
          <img alt="menu-settings" src={gear} />
        </div>
      </li>
    );
  },
});


export default cssModules(MenuSettings, styles);
