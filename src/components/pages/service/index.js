import React from 'react';
import cssModules from 'react-css-modules';
import styles from './service.scss';
import Layout from '../../layouts/layout';


function Service() {
  return (
    <Layout title="Service" service="active">
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
    </Layout>
  );
}


export default cssModules(Service, styles);
