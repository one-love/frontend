import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import InlineEdit from 'react-edit-inline';
import List from '../../molecules/transition-appear';
import Host from '../../molecules/host';
import HostDetail from '../host';
import Add from '../../atoms/add';
import hostActionsRemove from '../host/actions/remove';
import actions from './actions/detail';
import editActions from './actions/edit';
import createActions from '../../molecules/host/actions/create';
import settingsActions from '../../layouts/layout/actions/settings';
import CreateHostForm from '../../molecules/host/createForm';
import { history } from '../../../constants';
import notificationActions from '../../../containers/app/actions';


const mapStateToProps = (state) => {
  const data = {
    provider: state.providerDetail.provider,
    createStatus: state.hostCreate.status,
    removeStatus: state.hostRemove.status,
    remove: state.hostRemove.host,
    editProvider: state.providerEdit,
    editError: state.providerEdit.error,
    editStatus: state.providerEdit.status,
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
    editProvider: React.PropTypes.object,
    editStatus: React.PropTypes.string,
    editError: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      provider: {
        hosts: [],
        name: '',
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
    if (nextProps.editStatus === 'error') {
      this.props.dispatch(editActions.reset());
      this.props.dispatch(notificationActions.open(nextProps.editError));
      this.props.dispatch(
        actions.get(
          this.props.params.clusterId,
          this.props.params.providerName,
        ));
    }
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.editStatus === 'success') {
      let link = `/clusters/${nextProps.params.clusterId}`;
      link += `/providers/${nextProps.editProvider.provider.name}`;
      history.push(link);
      this.props.dispatch(editActions.reset());
    }
    return true;
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

  dataChanged(data) {
    this.props.dispatch(
      editActions.edit(
        this.props.params.clusterId,
        this.props.params.providerName,
        data
      )
    );
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
          Name:
          <InlineEdit
            paramName="name"
            text={this.props.provider.name}
            change={this.dataChanged}
          />
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
