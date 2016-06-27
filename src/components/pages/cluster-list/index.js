import React from 'react';
import Cluster from '../../molecules/cluster';
import List from '../../layouts/list';


export default function ClusterList() {
  return (
    <List title="Clusters" cluster="active">
      <Cluster name="Tilda Center" />
      <Cluster name="LUGoNS" />
      <Cluster name="LUGZR" />
    </List>
  );
}
