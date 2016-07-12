import React from 'react';
import svg from './provider.svg';
import Icon from '../../atoms/icon';


export default function Provider(props) {
  let name = 'ProviderName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <Icon alt="cluster" img={svg} name={name} />
  );
}


Provider.propTypes = {
  name: React.PropTypes.string,
};
