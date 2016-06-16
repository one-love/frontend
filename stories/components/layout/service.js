import React from 'react';
import CSSModules from 'react-css-modules';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import styles from './service.scss';


function Service() {
  return (
    <div>
      <Header service="active" />
      <div styleName="service">
        <h1>Service</h1>
        <div styleName="item">
          <div>
            <div styleName="label">
              user:
            </div>
            <div styleName="item">
              admin@example.com
            </div>
          </div>
          <div>
            <div styleName="label">
              roles:
            </div>
            <div styleName="item">
              <select>
                <option value="some">op čop</option>
                <option value="thing">antilop</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default CSSModules(Service, styles);
