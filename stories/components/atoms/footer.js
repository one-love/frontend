import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.scss';


function Footer() {
  return (
    <div styleName="footer">
      Made by: <a href="http://tilda.center/" target="_blank">Tilda Center</a>
    </div>
  );
}


export default CSSModules(Footer, styles);
