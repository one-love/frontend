import React from 'react';
import { connect } from 'react-redux';
import Cluster from './cluster';
import { getClusters } from './actions';


const mapStateToProps = (state) => {
  return {
    clusters: state.clusters,
  };
};

const ClusterList = React.createClass({
  propTypes: {
    store: React.PropTypes.object,
    children: React.PropTypes.node,
    clusters: React.PropTypes.array,
  },
  componentWillMount() {
    this.props.store.dispatch(getClusters());
  },
  render() {
    return (
      <div>
        <h2>My clusters:</h2>
        <ul>
          {this.props.clusters.map(cluster => <Cluster key={cluster.id} cluster={cluster} />)}
        </ul>
      </div>
    );
  },
});

export default connect(mapStateToProps)(ClusterList);
