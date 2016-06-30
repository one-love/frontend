import React from 'react';
import svg from './cloud.svg';
import Icon from '../../atoms/icon';


export default function Cluster(props) {
  let name = 'ClusterName';
  if (props && props.name) {
    name = props.name;
  }
  let path = '';
  if (props && props.path) {
    path = props.path;
  }
  return (
    <Icon alt="cluster" img={svg} name={name} path={path} />
  );
}


Cluster.propTypes = {
  name: React.PropTypes.string,
  path: React.PropTypes.string,
};
