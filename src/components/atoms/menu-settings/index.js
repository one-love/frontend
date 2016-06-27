import React from 'react';
import gear from './gear.svg';
import cssModules from 'react-css-modules';
import styles from './menu-settings.scss';


function MenuSettings() {
  return (
    <li styleName="menu-settings">
      <div>
        <img alt="menu-settings" src={gear} />
      </div>
    </li>
  );
}


export default cssModules(MenuSettings, styles);
