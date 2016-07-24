import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Cluster from '../../molecules/cluster';
import CreateClusterForm from '../../molecules/cluster/createForm';
import List from '../../molecules/transition-appear';
import store from '../../../store';
import clusterDetail from '../cluster';
import Add from '../../atoms/add';
import actions from './actions';
import createActions from '../../molecules/cluster/actions/create';
import removeActions from './actions/remove';
import settingsActions from '../../layouts/layout/actions/settings';


const mapStateToProps = state => {
  const data = {
    clusters: state.clusterList.clusters,
    status: state.clusterList.status,
  };
  if (state.clusterCreate) {
    data.createStatus = state.clusterCreate.status;
  }
  if (state.clusterRemove) {
    data.removeStatus = state.clusterRemove.status;
    data.removeCluster = state.clusterRemove.cluster;
  }
  return data;
};


const ClusterList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    clusters: React.PropTypes.array,
    status: React.PropTypes.string,
    removeStatus: React.PropTypes.string,
    removeCluster: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      clusters: [],
    };
  },

  getInitialState() {
    return {
      name: '',
      sshKey: '',
      username: '',
    };
  },

  componentWillMount() {
    store.dispatch(actions.get());
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.createStatus === 'success') {
      store.dispatch(createActions.reset());
      store.dispatch(actions.get());
    }
    if (nextProps.removeStatus === 'success') {
      store.dispatch(removeActions.reset());
      store.dispatch(actions.get());
    }
    return true;
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
    store.dispatch(removeActions.reset());
  },

  showCreate() {
    store.dispatch(settingsActions.open(<CreateClusterForm />));
  },

  handleRemove(event) {
    event.preventDefault();
    store.dispatch(removeActions.remove(this.props.removeCluster.id));
  },

  handleCancel(event) {
    event.preventDefault();
    store.dispatch(removeActions.reset());
  },

  render() {
    const clusters = (
      <div>
        <h1>Clusters</h1>
        {
          this.props.clusters.map(
            cluster => {
              const url = `clusters/${cluster.id}`;
              return (
                <Link to={url} key={cluster.id}>
                  <Cluster
                    name={cluster.name}
                    iconId={cluster.id}
                    close={removeActions.confirm}
                  />
                </Link>
              );
            }
          )
        }
      </div>
    );
    if (this.props.removeStatus === 'confirm') {
      return (
        <div>
          <h1>Remove cluster {this.props.removeCluster.id}?</h1>
          <button className="button" onClick={this.handleRemove}>yes</button>
          <button className="button" onClick={this.handleCancel}>no</button>
        </div>
      );
    }
    return (
      <div>
        <List>
          {clusters}
        </List>
        <div onClick={this.showCreate}>
          <Add />
        </div>
      </div>
    );
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
