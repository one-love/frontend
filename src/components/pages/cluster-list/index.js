import React from 'react';
import { Link } from 'react-router';
import Cluster from '../../molecules/cluster';
import List from '../../molecules/transition-appear';
import { connect } from 'react-redux';
import actions from './actions';
import store from '../../../store';
import clusterDetail from '../cluster';

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
        <h1>Clusters</h1>
        {
          this.props.clusters.map(
            cluster => {
              const url = `clusters/${cluster.id}`;
              return (
                <Link to={url} key={cluster.id}>
                  <Cluster name={cluster.name} />
                </Link>
              );
            }
          )
        }
      </div>
    );
    const index = (
      <List>
        {clusters}
      </List>
    );
    if (this.props.children) { return children; }
    return index;
  },
});

const routes = {
  path: 'clusters',
  indexRoute: {
    component: connect(mapStateToProps, actions)(ClusterList),
  },
  childRoutes: [
    clusterDetail,
  ],
};

export default routes;
