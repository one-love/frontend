import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import styles from './provision.scss';


function Provision() {
  return (
    <div>
      <Header provision="active" />
      <div styleName="provision">
        <h1>Provision</h1>
        <div>
          <div>
            <div styleName="label">
              status:
            </div>
            <div styleName="item">
              RUNNING
            </div>
          </div>
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
              cluster:
            </div>
            <div styleName="item">
              <Link to="/cluster/id">cluster</Link>
            </div>
          </div>
          <div>
            <div styleName="label">
              service:
            </div>
            <div styleName="item">
              <Link to="/service/id">service</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default CSSModules(Provision, styles);
