import React from 'react';
import Cluster from './cluster';
import { getClusters } from './actions';

const ClusterList = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
    children: React.PropTypes.node,
  },
  componentWillMount() {
    this.props.store.dispatch(getClusters());
  },
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
