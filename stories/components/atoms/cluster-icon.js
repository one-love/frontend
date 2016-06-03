import React from 'react';
import cloud from '../../../media/img/cloud.svg';

export default (props) => {
  let name = 'ClusterName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <div className="o-media center icon inline">
      <img src={cloud} className="o-media__img cluster_icon" />
      <div classNeme="o-media__body">
        {name}
      </div>
    </div>
  );
}
