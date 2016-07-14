import React from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import styles from './menu-item.scss';


function MenuItem(props) {
  let styleName = 'item';
  let linkContent = 'Item';
  if (props) {
    if (props.active === 'yes') {
      styleName += '-active';
    }
    if (props.name) {
      linkContent = props.name;
    }
    if (props.icon) {
      linkContent = (
        <img alt="icon" src={props.icon} className={styles.icon} />
      );
    }
  }
  return (
    <li styleName={styleName}>
      <Link to={props.link ? props.link : ''}>{linkContent}</Link>
    </li>
  );
}


MenuItem.propTypes = {
  active: React.PropTypes.string,
  link: React.PropTypes.string,
  name: React.PropTypes.string,
  icon: React.PropTypes.string,
};


export default cssModules(MenuItem, styles);
