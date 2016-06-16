import React from 'react';
import CSSModules from 'react-css-modules';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import Cluster from '../molecules/cluster';
import styles from './cluster-list.scss';


function ClusterList() {
  return (
    <div>
      <Header cluster="active"/>
      <div styleName="cluster-list">
        <h1>Clusters</h1>
        <Cluster name="Tilda Center"/>
        <Cluster name="LUGoNS"/>
        <Cluster name="LUGZR"/>
      </div>
      <Footer />
    </div>
  );
}


export default CSSModules(ClusterList, styles);
