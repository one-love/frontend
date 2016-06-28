import React from 'react';
import svg from './cloud.svg';
import Icon from '../../atoms/icon';


export default function Cluster(props) {
  let name = 'ClusterName';
  if (props && props.name) {
    name = props.name;
  }
  let path = 'clusters/';
  if (props && props.id) {
    path = path + props.id;
  }
  return (
    <Icon alt="cluster" img={svg} name={name} path={path} />
  );
}


Cluster.propTypes = {
  name: React.PropTypes.string,
  id: React.PropTypes.string,
};
