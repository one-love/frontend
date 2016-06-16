import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import MenuItem from '../atoms/menu-item';
import MenuSettings from '../atoms/menu-settings';
import styles from './header.scss';


function Header(props) {
  const myProps = props || {cluster: "active"};
  return (
    <ul className="o-layout o-list-inline" styleName="header">
      <MenuItem styleName={myProps.cluster} link="/clusters" name="Clusters" />
      <MenuItem styleName={myProps.service} link="/services" name="Services" />
      <MenuItem styleName={myProps.provision} link="/provisions" name="Provisions" />
      <MenuSettings />
    </ul>
  );
}


export default CSSModules(Header, styles);
