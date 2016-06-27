import React from 'react';
import cssModules from 'react-css-modules';
import styles from './notification.scss';


function Notification(props) {
  const transitionTime = props.transitionTime / 1000.0;
  const style = {
    transition: `top ${transitionTime}s ease-out`,
  };
  return (
    <div style={style} styleName="notification">
      <span styleName="notification_indicator"></span>
      Notification and <a href="">link</a>
    </div>
  );
}


Notification.propTypes = {
  transitionTime: React.PropTypes.string,
};


export default cssModules(Notification, styles);
