import React from 'react';
import svg from './provider.svg';
import Icon from '../../atoms/icon';


export default function Provider(props) {
  let name = 'ProviderName';
  if (props && props.name) {
    name = props.name;
  }
  const iconId = `clusters/${props.iconId.clusterId}/providers/${props.iconId.name}`;
  return (
    <Icon
      alt="cluster"
      img={svg}
      name={name}
      iconId={iconId}
      close={props.close}
    />
  );
}


Provider.propTypes = {
  name: React.PropTypes.string,
  iconId: React.PropTypes.object,
  close: React.PropTypes.func,
};
