import React from 'react';
import svg from './host.svg';
import Icon from '../../atoms/icon';


export default function Host(props) {
  let name = 'HostName';
  if (props && props.name) {
    name = props.name;
  }
  const iconId = `clusters/${props.iconId.clusterId}/providers/${props.iconId.providerName}/hosts/${props.iconId.hostname}`;
  return (
    <Icon
      alt="host"
      img={svg}
      name={name}
      iconId={iconId}
      close={props.close}
    />
  );
}


Host.propTypes = {
  name: React.PropTypes.string,
  iconId: React.PropTypes.object,
  close: React.PropTypes.func,
};
