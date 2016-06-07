import React from 'react';
import { Link } from 'react-router';
import MenuItem from '../atoms/menu-item';
import MenuSettings from '../atoms/menu-settings';

export default (props) => {
  const myProps = props || {cluster: "active"};
  return (
    <ul className="o-layout o-list-inline header">
      <MenuItem className={myProps.cluster} link="/clusters" name="Clusters" />
      <MenuItem className={myProps.service} link="/services" name="Services" />
      <MenuItem className={myProps.provision} link="/provisions" name="Provisions" />
      <MenuSettings />
    </ul>
  );
};
