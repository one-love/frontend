import React from 'react';
import svg from './application.svg';
import Icon from '../../atoms/icon';


export default function Application(props) {
  let name = 'AppName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <Icon alt="application" img={svg} name={name} />
  );
}


Application.propTypes = {
  name: React.PropTypes.string,
};
