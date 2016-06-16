import React from 'react';
import CSSModules from 'react-css-modules';
import gear from '../../../media/img/gear.svg';
import styles from './menu-settings.scss';

function MenuSettings() {
  return (
    <li styleName="menu-settings">
      <div>
        <img src={gear} />
      </div>
    </li>
  );
};


export default CSSModules(MenuSettings, styles);
