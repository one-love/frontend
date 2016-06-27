import React from 'react';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';
import Log from '../../atoms/log';
import styles from './provision.scss';


function Provision() {
  return (
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
      <Log />
    </div>
  );
}


export default cssModules(Provision, styles);
