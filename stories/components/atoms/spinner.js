import React from 'react';
import CSSModule from 'react-css-modules';
import styles from './spinner.scss';

function Spinner() {
  return (
    <div id="faceoff">
      <div id="preloader"></div>
      <div className="preloader-section"></div>
    </div>
  );
}


export default CSSModule(Spinner, styles);
