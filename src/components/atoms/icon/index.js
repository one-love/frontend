import React from 'react';
import cssModules from 'react-css-modules';
import styles from './icon.scss';
import { Link } from 'react-router';


function Icon(props) {
  let name = 'IconName';
  if (props && props.name) {
    name = props.name;
  }
  let content = '';
  if (props.path === undefined) {
    content = (
      <div>
        <img
          src={props.img}
          alt={props.alt ? props.alt : 'icon'}
          styleName="icon-img"
        />
        <div>
          {name}
        </div>
      </div>
      );
  } else {
    content = (
      <Link to={props.path} >
        <img
          src={props.img}
          alt={props.alt ? props.alt : 'icon'}
          styleName="icon-img"
        />
        <div>
          {name}
        </div>
      </Link>
    );
  }
  return (
    <div styleName="icon">
      <div styleName="icon-close">x</div>
      {content}
    </div>
  );
}


Icon.propTypes = {
  alt: React.PropTypes.string,
  name: React.PropTypes.string,
  img: React.PropTypes.string,
  path: React.PropTypes.string,
};


export default cssModules(Icon, styles);
