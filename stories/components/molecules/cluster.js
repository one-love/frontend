import React from 'react';
import CSSModules from 'react-css-modules';
import cloud from '../../../media/img/cloud.svg';
import styles from './cluster.scss';


function Cluster(props) {
  let name = 'ClusterName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <div className="o-media" styleName="icon">
      <img src={cloud} className="o-media__img" styleName="icon-img" />
      <div className="o-media__body">
        {name}
      </div>
    </div>
  );
}


export default CSSModules(Cluster, styles);
