import React from 'react';
import CSSModules from 'react-css-modules';
import service from '../../../media/img/service.svg';
import styles from './service.scss';

function Service(props) {
  let name = 'ServiceName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <div className="o-media" styleName="icon">
      <img src={service} className="o-media__img" styleName="icon-img"/>
      <div classNeme="o-media__body">
        {name}
      </div>
    </div>
  );
}


export default CSSModules(Service, styles);
