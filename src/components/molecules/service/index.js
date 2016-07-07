import React from 'react';
import svg from './service.svg';
import Icon from '../../atoms/icon';


export default function Service(props) {
  let name = 'ServiceName';
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


Service.propTypes = {
  name: React.PropTypes.string,
  path: React.PropTypes.string,
};
