import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cssModules from 'react-css-modules';
import styles from './popup.scss';


function Popup(props) {
  let timeout = 300;
  let animationType = 'ease-out';
  if (props.className && props.className.endsWith('__full')) {
    timeout = 1000;
    animationType = 'ease-in-out';
  }
  const timeoutSeconds = timeout / 1000.0;
  const style = {
    transition: `width ${timeoutSeconds}s ${animationType}`,
  };
  return (
    <ReactCSSTransitionGroup
      transitionName="popup"
      transitionAppear
      transitionAppearTimeout={10}
      transitionEnterTimeout={timeout}
      transitionLeaveTimeout={timeout}
    >
      <div styleName={props.className} style={style}>
        <div styleName="disable">x</div>
        <div>
          {props.children}
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
}


Popup.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};


export default cssModules(Popup, styles);
