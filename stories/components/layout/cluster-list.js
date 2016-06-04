import React from 'react';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import Cluster from '../molecules/cluster';
import '../style.scss';

export default () => (
  <div>
    <Header cluster="true"/>
    <div className="content">
      <h1>Clusters</h1>
      <Cluster name="Tilda Center" />
      <Cluster name="LUGoNS" />
      <Cluster name="LUGZR" />
    </div>
    <Footer />
  </div>
);
