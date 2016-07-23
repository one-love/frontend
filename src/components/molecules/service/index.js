import React from 'react';
import svg from './service.svg';
import Icon from '../../atoms/icon';


export default function Service(props) {
  let name = 'ServiceName';
  if (props && props.name) {
    name = props.name;
  }
  const iconId = `clusters/${props.clusterId}/services/${props.service.id}`;
  return (
    <Icon
      alt="cluster"
      img={svg}
      name={name}
      iconId={iconId}
    />
  );
}


Service.propTypes = {
  name: React.PropTypes.string,
  clusterId: React.PropTypes.string,
  service: React.PropTypes.object,
};
