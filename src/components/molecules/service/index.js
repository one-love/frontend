import React from 'react';
import Icon from '../../atoms/icon';
import svg from './service.svg';


export default function Service(props) {
  let name = 'ServiceName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <Icon
      alt="cluster"
      img={svg}
      name={name}
      iconId={props.iconId}
      close={props.close}
    />
  );
}


Service.propTypes = {
  name: React.PropTypes.string,
  iconId: React.PropTypes.string,
  close: React.PropTypes.func,
};
