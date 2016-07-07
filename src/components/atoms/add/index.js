import React from 'react';
import cssModules from 'react-css-modules';
import svg from './add.svg';
import styles from './add.scss';


function Add() {
  return (
    <div styleName="add">
      <img alt="add" src={svg} />
    </div>
  );
}


export default cssModules(Add, styles);
