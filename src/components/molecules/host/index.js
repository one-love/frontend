import React from 'react';
import svg from './host.svg';
import Icon from '../../atoms/icon';


export default function Host(props) {
  let name = 'HostName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <Icon alt="host" img={svg} name={name} />
  );
}


Host.propTypes = {
  name: React.PropTypes.string,
};
