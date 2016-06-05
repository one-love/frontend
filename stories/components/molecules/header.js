import React from 'react';
import { Link } from 'react-router';
import MenuItem from '../atoms/menu-item';
import MenuSettings from '../atoms/menu-settings';

export default (props) => {
  const myProps = props || {cluster: true};
  return (
    <ul className="o-layout o-list-inline header">
      <MenuItem className="active" link="/clusters" name="Clusters" />
      <MenuItem link="/services" name="Services" />
      <MenuItem link="/provisions" name="Provisions" />
      <MenuSettings />
    </ul>
  );
};
