import React from 'react';
import cssModules from 'react-css-modules';
import styles from './host.scss';
import Layout from '../../layouts/layout';

function Host() {
  return (
    <Layout cluster="active" title="Host">
      <div>
        <div styleName="label">hostname:</div>
        <div styleName="item">one-love.com</div>
      </div>
      <div>
        <div styleName="label">IP:</div>
        <div styleName="item">127.0.0.1</div>
      </div>
    </Layout>
  );
}


export default cssModules(Host, styles);
