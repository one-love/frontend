import React from 'react';
import svg from './provider.svg';
import Icon from '../../atoms/icon';


export default function Provider(props) {
  let name = 'ProviderName';
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


Provider.propTypes = {
  name: React.PropTypes.string,
  path: React.PropTypes.string,
};
