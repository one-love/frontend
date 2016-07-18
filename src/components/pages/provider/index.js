import React from 'react';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';
import styles from './provider.scss';
import { connect } from 'react-redux';
import store from '../../../store';
import List from '../../molecules/transition-appear';
import Host from '../../molecules/host';
import HostDetail from '../host';
import Sidebar from '../../atoms/sidebar';
import Add from '../../atoms/add';
import createActions from '../host/actions/create';
import hostActionsRemove from '../host/actions/remove';
import actions from './actions/detail';


const mapStateToProps = (state) => {
  const data = {
    provider: state.providerDetail.provider,
    createStatus: state.hostCreate.status,
    removeStatus: state.hostRemove.status,
    remove: state.hostRemove.host,
  };
  return data;
};


const ProviderDetail = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    provider: React.PropTypes.object,
    params: React.PropTypes.object,
    remove: React.PropTypes.object,
    removeStatus: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      provider: {
        hosts: [],
      },
    };
  },

  getInitialState() {
    return {
      hostname: '',
      ip: '',
    };
  },

  componentWillMount() {
    store.dispatch(
      actions.get(
        this.props.params.clusterId,
        this.props.params.providerName,
      ));
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.createStatus === 'success') {
      store.dispatch(createActions.reset());
      store.dispatch(actions.get(
        this.props.params.clusterId,
        this.props.params.providerName,
      ));
      this.setState({ create: false });
    } else if (nextProps.removeStatus === 'success') {
      store.dispatch(hostActionsRemove.reset());
      store.dispatch(actions.get(
        this.props.params.clusterId,
        this.props.params.providerName,
      ));
      this.setState({ create: false });
    }
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  showCreate() {
    this.setState({ create: true });
  },

  hideCreate() {
    this.setState({
      create: false,
      hostname: '',
      ip: '',
    });
  },

  handleHostnameChange(event) {
    this.setState({ hostname: event.target.value });
  },

  handleIPChange(event) {
    this.setState({ ip: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(createActions.create(
      this.props.params.clusterId,
      this.props.params.providerName,
      this.state.hostname,
      this.state.ip,
    ));
    this.setState({
      hostname: '',
      ip: '',
      create: false,
    });
  },

  handleRemove(event) {
    event.preventDefault();
    store.dispatch(hostActionsRemove.remove(
      this.props.remove.id,
    ));
  },

  handleCancel(event) {
    event.preventDefault();
    store.dispatch(hostActionsRemove.reset());
  },

  render() {
    if (this.props.removeStatus === 'confirm') {
      return (
        <div>
          <h1>Remove host {this.props.remove.id}?</h1>
          <button className="button" onClick={this.handleRemove}>yes</button>
          <button className="button" onClick={this.handleCancel}>no</button>
        </div>
      );
    }
    let createHost = '';
    if (this.state.create) {
      createHost = (
        <div>
          <div className="disable" onClick={this.hideCreate}>x</div>
          <h1>Create Host</h1>
          <form role="form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="ip">IP</label>
              <input
                autoFocus
                type="text"
                id="ip"
                placeholder="IP"
                onChange={this.handleIPChange}
                value={this.state.ip}
              />
            </div>
            <div>
              <label htmlFor="hostname">hostname</label>
              <input
                type="text"
                id="hostname"
                placeholder="hostname"
                onChange={this.handleHostnameChange}
                value={this.state.hostname}
              />
            </div>
            <button className="button">Create</button>
          </form>
        </div>
      );
    }
    const clusterId = this.props.params.clusterId;
    const providerName = this.props.params.providerName;
    const providerUrl = `/clusters/${clusterId}/providers/${providerName}`;
    const hosts = (
      <List title="Hosts" cluster="active">
        {
          this.props.provider.hosts.map(host => {
            const link = `${providerUrl}/hosts/${host.hostname}`;
            const identifier = {
              clusterId: this.props.params.clusterId,
              providerName: this.props.params.providerName,
              hostname: host.hostname,
            };
            return (
              <Link key={host.hostname} to={link}>
                <Host
                  name={host.hostname}
                  iconId={identifier}
                  close={hostActionsRemove.confirm}
                />
              </Link>
            );
          })
        }
      </List>
    );
    return (
      <div>
        <Sidebar show={this.state.create}>
          {createHost}
        </Sidebar>
        <div>
          <h2>Provider</h2>
          Name: {this.props.provider.name}
          <h3>Hosts</h3>
          {hosts}
        </div>
        <div onClick={this.showCreate}>
          <Add />
        </div>
      </div>
    );
  },
});


const routes = {
  path: 'providers/:providerName',
  indexRoute: {
    component: connect(mapStateToProps, actions)(
      cssModules(ProviderDetail, styles)
    ),
  },
  childRoutes: [
    HostDetail,
  ],
};

export default routes;
