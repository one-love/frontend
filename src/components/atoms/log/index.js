import React from 'react';
import cssModules from 'react-css-modules';
import styles from './log.scss';


function Log(props) {
  return (
    <div styleName="provisions">
      {props.children}
    </div>
  );
}


Log.propTypes = {
  children: React.PropTypes.node,
};


export default cssModules(Log, styles);
