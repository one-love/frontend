import React from 'react';
import svg from './application.svg';
import Icon from '../../atoms/icon';


export default function Application(props) {
  let name = 'AppName';
  if (props && props.name) {
    name = props.name;
  }
  const iconId = `services/${props.iconId.serviceId}/applications/${props.iconId.applicationName}`;
  return (
    <Icon
      alt="application"
      img={svg}
      name={name}
      iconId={iconId}
      close={props.close}
    />
  );
}


Application.propTypes = {
  name: React.PropTypes.string,
  iconId: React.PropTypes.object,
  close: React.PropTypes.func,
};
