import React from 'react';
import cssModules from 'react-css-modules';
import styles from './log.scss';


function Log() {
  return (
    <div styleName="provisions">
      <div styleName="ok">[192.168.33.34] setup </div>
      <div styleName="ok">[192.168.33.34] onelove-roles.common : dummy task </div>
      <div styleName="ok">[192.168.33.34] onelove-roles.common : pause </div>
      <div styleName="ok">[192.168.33.34] onelove-roles.common : dump task </div>
      <div styleName="failed">[192.168.33.34] onelove-roles.common : pause </div>
      <div styleName="failed">[192.168.33.34] onelove-roles.common : date </div>
      <div styleName="failed">[192.168.33.34] onelove-roles.common : pause </div>
    </div>
  );
}


export default cssModules(Log, styles);
