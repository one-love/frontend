import React from 'react';
import cssModules from 'react-css-modules';
import Layout from '../../layouts/layout';
import styles from './application.scss';


function Application() {
  return (
    <Layout title="Application" service="active">
      <div>
        <div styleName="label">name:</div>
        <div styleName="item">common</div>
      </div>
      <div>
        <div styleName="label">galaxy role:</div>
        <div styleName="item">onelove-roles.common</div>
      </div>
    </Layout>
  );
}


export default cssModules(Application, styles);
