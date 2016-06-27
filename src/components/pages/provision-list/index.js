import React from 'react';
import cssModules from 'react-css-modules';
import styles from './provision-list.scss';
import Layout from '../../layouts/layout';


function ProvisionList() {
  return (
    <Layout title="Provisions" provision="active">
      <div styleName="provision__ok">1341324fb134f134</div>
      <div styleName="provision__failed">56a3b4fb134f87ec</div>
    </Layout>
  );
}


export default cssModules(ProvisionList, styles);
