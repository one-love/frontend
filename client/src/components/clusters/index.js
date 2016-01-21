import React from 'react';
import Cluster from './cluster';

const ClusterList = React.createClass({
  render() {
    return (
      <div>
        <h2>My clusters:</h2>
        <ul>
          <Cluster />
        </ul>
      </div>
    );
  },
});

export default ClusterList;
