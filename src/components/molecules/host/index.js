import React from 'react';
import svg from './host.svg';
import Icon from '../../atoms/icon';


export default function Host(props) {
  let name = 'HostName';
  if (props && props.name) {
    name = props.name;
  }
  const clusterId = props.iconId.clusterId;
  const providerName = props.iconId.providerName;
  const hostname = props.iconId.hostname;
  const iconId = `clusters/${clusterId}/providers/${providerName}/hosts/${hostname}`;
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
