import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import List from '../../molecules/transition-appear';
import Host from '../../molecules/host';
import HostDetail from '../host';
import Add from '../../atoms/add';
import hostActionsRemove from '../host/actions/remove';
import actions from './actions/detail';
import createActions from '../../molecules/host/actions/create';
import settingsActions from '../../layouts/layout/actions/settings';
import CreateHostForm from '../../molecules/host/createForm';


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
    dispatch: React.PropTypes.func.isRequired,
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
    this.props.dispatch(
      actions.get(
        this.props.params.clusterId,
        this.props.params.providerName,
      ));
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.createStatus === 'success') {
      this.props.dispatch(createActions.reset());
      this.props.dispatch(actions.get(
        this.props.params.clusterId,
        this.props.params.providerName,
      ));
      this.setState({ create: false });
    } else if (nextProps.removeStatus === 'success') {
      this.props.dispatch(hostActionsRemove.reset());
      this.props.dispatch(actions.get(
        this.props.params.clusterId,
        this.props.params.providerName,
      ));
      this.setState({ create: false });
    }
  },

  componentWillUnmount() {
    this.props.dispatch(actions.reset());
  },

  showCreate() {
    const clusterId = this.props.params.clusterId;
    const providerName = this.props.params.providerName;
    this.props.dispatch(
      settingsActions.open(
        <CreateHostForm
          clusterId={clusterId}
          providerName={providerName}
        />
      )
    );
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
  },

  handleRemove(event) {
    event.preventDefault();
    this.props.dispatch(hostActionsRemove.remove(
      this.props.remove.id,
    ));
  },

  handleCancel(event) {
    event.preventDefault();
    this.props.dispatch(hostActionsRemove.reset());
  },

  render() {
    if (this.props.removeStatus === 'confirm') {
      return (
        <div>
          <h1>Remove host {this.props.remove.id}?</h1>
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
    component: connect(mapStateToProps)(ProviderDetail),
  },
  childRoutes: [
    HostDetail,
  ],
};

export default routes;
