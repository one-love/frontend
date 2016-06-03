import React from 'react';
import service from '../../../media/img/service.svg';

export default (props) => {
  let name = 'ServiceName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <div className="o-media center icon inline">
      <img src={service} className="o-media__img cluster_icon" />
      <div classNeme="o-media__body">
        {name}
      </div>
    </div>
  );
}
