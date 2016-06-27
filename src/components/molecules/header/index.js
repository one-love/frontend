import React from 'react';
import cssModules from 'react-css-modules';
import MenuItem from '../../atoms/menu-item';
import MenuSettings from '../../atoms/menu-settings';
import styles from './header.scss';


function Header(props) {
  return (
    <ul styleName="header">
      <MenuItem active={props.cluster ? 'yes' : 'no'} link="/clusters" name="Clusters" />
      <MenuItem active={props.service ? 'yes' : 'no'} link="/services" name="Services" />
      <MenuItem active={props.provision ? 'yes' : 'no'} link="/provisions" name="Provisions" />
      <MenuSettings notification={props.notification}/>
    </ul>
  );
}


Header.propTypes = {
  cluster: React.PropTypes.string,
  service: React.PropTypes.string,
  provision: React.PropTypes.string,
  notification: React.PropTypes.bool,
};


export default cssModules(Header, styles);
