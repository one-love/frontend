import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Cluster from '../../molecules/cluster';
import CreateClusterForm from '../../molecules/cluster/createForm';
import List from '../../molecules/transition-appear';
import clusterDetail from '../cluster';
import Add from '../../atoms/add';
import actions from './actions';
import createActions from '../../molecules/cluster/actions/create';
import removeActions from '../../molecules/cluster/actions/remove';
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
    dispatch: React.PropTypes.func.isRequired,
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
    this.props.dispatch(actions.get());
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.createStatus === 'success') {
      this.props.dispatch(createActions.reset());
      this.props.dispatch(actions.get());
    }
    if (nextProps.removeStatus === 'success') {
      this.props.dispatch(removeActions.reset());
      this.props.dispatch(actions.get());
    }
    return true;
  },

  componentWillUnmount() {
    this.props.dispatch(actions.reset());
    this.props.dispatch(removeActions.reset());
  },

  showCreate() {
    this.props.dispatch(settingsActions.open(<CreateClusterForm />));
  },

  handleRemove(event) {
    event.preventDefault();
    this.props.dispatch(removeActions.remove(this.props.removeCluster.id));
  },

  handleCancel(event) {
    event.preventDefault();
    this.props.dispatch(removeActions.reset());
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
          <FlatButton
            onTouchTap={this.handleRemove}
            label="yes"
            secondary
          />
          <FlatButton
            onTouchTap={this.handleCancel}
            label="no"
            primary
          />
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
    component: connect(mapStateToProps)(ClusterList),
  },
  childRoutes: [
    clusterDetail,
  ],
};

export default routes;
