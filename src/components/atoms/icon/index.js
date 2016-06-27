import React from 'react';
import cssModules from 'react-css-modules';
import styles from './icon.scss';


function Icon(props) {
  let name = 'IconName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <div styleName="icon">
      <div styleName="icon-close">x</div>
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
}


Icon.propTypes = {
  alt: React.PropTypes.string,
  name: React.PropTypes.string,
  img: React.PropTypes.string,
};


export default cssModules(Icon, styles);
