import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import Cluster from '../../molecules/cluster';
import List from '../../molecules/transition-appear';
import store from '../../../store';
import clusterDetail from '../cluster';
import Add from '../../atoms/add';
import actions from './actions';
import createActions from './actions/create';
import removeActions from './actions/remove';
import styles from './styles.scss';


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
  }
  return data;
};


const ClusterList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    clusters: React.PropTypes.array,
    status: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      clusters: [],
    };
  },

  getInitialState() {
    return {
      display: 'none',
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
      this.setState({ display: 'none' });
    }
    if (nextProps.removeStatus === 'success') {
      store.dispatch(removeActions.reset());
      store.dispatch(actions.get());
    }
    return true;
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  showCreate() {
    this.setState({ display: 'initial' });
  },

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  handleSSHKeyChange(event) {
    this.setState({ sshKey: event.target.value });
  },

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(
      createActions.create(
        this.state.name,
        this.state.sshKey,
        this.state.username,
      )
    );
    this.setState({ name: '' });
  },

  render() {
    const createCluster = (
      <div style={{ display: this.state.display }}>
        <h1>Create Cluster</h1>
        <form role="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              autoFocus
              type="text"
              id="name"
              placeholder="Name"
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="sshKey">SSH Key</label>
            <input
              autoFocus
              type="text"
              id="sshKey"
              placeholder="SSH Key"
              onChange={this.handleSSHKeyChange}
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              type="text"
              id="username"
              placeholder="Username"
              onChange={this.handleUsernameChange}
            />
          </div>
          <button styleName="button">Create</button>
        </form>
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
                  <Cluster name={cluster.name} iconId={cluster.id} close={removeActions.remove} />
                </Link>
              );
            }
          )
        }
      </div>
    );
    return (
      <div>
        {createCluster}
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
    component: connect(mapStateToProps, actions)(
      cssModules(ClusterList, styles)
    ),
  },
  childRoutes: [
    clusterDetail,
  ],
};

export default routes;
