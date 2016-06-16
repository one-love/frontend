import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import gear from '../../../media/img/gear.svg';
import styles from './menu-item.scss';


function MenuItem(props) {
  if (props === undefined) {
    props = {
      link: '/',
      name: 'Item',
    };
  }
  return (
    <li className={props.className} styleName="inline">
      <Link to={props.link}>{props.name}</Link>
    </li>
  );
};


export default CSSModules(MenuItem, styles);
