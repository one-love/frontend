import React from 'react';
import svg from './cloud.svg';
import Icon from '../../atoms/icon';


export default function Cluster(props) {
  let name = 'ClusterName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <Icon alt="cluster" img={svg} name={name} />
  );
}


Cluster.propTypes = {
  name: React.PropTypes.string,
};
