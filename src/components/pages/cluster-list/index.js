import React from 'react';
import Cluster from '../../molecules/cluster';
import List from '../../layouts/list';
import { connect } from 'react-redux';
import actions from './actions';
import store from '../../../store';

const mapStateToProps = state => ({
  clusters: state.clusterList.clusters,
  status: state.clusterList.status,
});

const ClusterList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    clusters: React.PropTypes.array,
    status: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(actions.get());
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    const children = (
      <div>
        {this.props.children}
      </div>
    );
    const clusters = (
      <div>
          {
            this.props.clusters.map(
              cluster =>
                <Cluster key={cluster.id} name={cluster.name} />
            )
          }
      </div>
    );
    const index = (
      <List title="Clusters" cluster="active">
        {clusters}
      </List>
    );
    if (this.props.children) { return children; }
    return index;
  },
});


export default connect(mapStateToProps, actions)(ClusterList);
