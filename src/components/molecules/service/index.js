import React from 'react';
import service from './service.svg';
import Icon from '../../atoms/icon';


export default function Service(props) {
  let name = 'ServiceName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <Icon alt="service" img={service} name={name} />
  );
}


Service.propTypes = {
  name: React.PropTypes.string,
};
