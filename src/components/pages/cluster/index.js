import React from 'react';
import cssModules from 'react-css-modules';
import styles from './cluster.scss';
import Layout from '../../layouts/layout';

function Cluster() {
  return (
    <Layout cluster="active">
      <div>
        <div styleName="label">
          username:
        </div>
        <div styleName="item">
          admin@example.com
        </div>
      </div>
      <div>
        <div styleName="label">
          ssh key:
        </div>
        <div styleName="item">
          tandara mandara
        </div>
      </div>
      <div>
        <div styleName="label">
          providers:
        </div>
        <div styleName="item">
          <select>
            <option value="cluster name">cicvara popara</option>
            <option value="something">gurabija</option>
          </select>
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
      <div>
        <div styleName="label">
          services:
        </div>
        <div styleName="item">
          <select>
            <option value="some">bandaranaik</option>
            <option value="thing">trokraka udica</option>
          </select>
        </div>
      </div>
    </Layout>
  );
}


export default cssModules(Cluster, styles);
