import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import InlineEdit from 'react-edit-inline';
import FlatButton from 'material-ui/FlatButton';
import actions from './actions/detail';
import editActions from './actions/edit';
import providerActions from '../../molecules/provider/actions/create';
import providerActionsRemove from '../provider/actions/remove';
import serviceActionsRemove from '../../organisms/cluster-service-list/actions/remove';
import settingsActions from '../../layouts/layout/actions/settings';
import List from '../../molecules/transition-appear';
import ClusterServiceList from '../../organisms/cluster-service-list';
import Provider from '../../molecules/provider';
import ProviderDetail from '../provider';
import ServiceProvision from '../service-provision';
import Add from '../../atoms/add';
import AllServices from '../../organisms/service-list';
import CreateProviderForm from '../../molecules/provider/createForm';
import addService from '../../molecules/dragable-service/actions/add';
import notificationActions from '../../layouts/layout/actions/notifications';


const mapStateToProps = (state) => {
  const data = {
    cluster: state.clusterDetail.cluster,
    roles: state.clusterDetail.roles,
    plugins: state.providerPlugins.plugins,
    provider: state.providerCreate.provider,
    providerStatus: state.providerCreate.status,
    providerRemove: state.providerRemove.provider,
    providerRemoveStatus: state.providerRemove.status,
    serviceRemove: state.clusterServiceRemove.service,
    serviceRemoveStatus: state.clusterServiceRemove.status,
    clusterEditStatus: state.clusterEdit.status,
    clusterEditError: state.clusterEdit.error,
  };
  if (state.clusterEdit.cluster) {
    data.cluster = state.clusterEdit.cluster;
  }
  return data;
};


const ClusterDetail = React.createClass({
  propTypes: {
    cluster: React.PropTypes.object,
    roles: React.PropTypes.array,
    params: React.PropTypes.object,
    plugins: React.PropTypes.array,
    provider: React.PropTypes.object,
    providerStatus: React.PropTypes.string,
    providerRemove: React.PropTypes.object,
    providerRemoveStatus: React.PropTypes.string,
    serviceRemove: React.PropTypes.object,
    serviceRemoveStatus: React.PropTypes.string,
    clusterEditStatus: React.PropTypes.string,
    clusterEditError: React.PropTypes.string,
    dispatch: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      plugins: [],
      cluster: {
        services: [],
        providers: [],
        name: '',
      },
    };
  },

  getInitialState() {
    return {
      fields: {},
      pluginProps: [],
    };
  },

  componentWillMount() {
    this.props.dispatch(actions.get(this.props.params.clusterId));
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.providerStatus === 'success') {
      this.props.dispatch(actions.get(this.props.params.clusterId));
      this.props.dispatch(providerActions.reset());
      this.setState({ create: false });
    } else if (nextProps.providerRemoveStatus === 'success') {
      this.props.dispatch(actions.get(this.props.params.clusterId));
      this.props.dispatch(providerActionsRemove.reset());
    } else if (nextProps.serviceRemoveStatus === 'success') {
      this.props.dispatch(actions.get(this.props.params.clusterId));
      this.props.dispatch(serviceActionsRemove.reset());
    } else if (nextProps.addServiceStatus === 'success') {
      this.props.dispatch(actions.get(this.props.params.clusterId));
      this.props.dispatch(addService.reset());
    }
    if (nextProps.clusterEditStatus === 'error') {
      this.props.dispatch(editActions.reset());
      this.props.dispatch(notificationActions.open(nextProps.clusterEditError));
      this.props.dispatch(actions.get(this.props.params.clusterId));
    }
  },

  componentWillUnmount() {
    this.props.dispatch(actions.reset());
    this.props.dispatch(editActions.reset());
  },

  dataChanged(data) {
    this.props.dispatch(
      editActions.edit(
        this.props.params.clusterId,
        data
      )
    );
  },

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(
      providerActions.create(
        this.props.params.clusterId,
        this.state.type,
        this.state.fields,
      )
    );
  },

  handleRemove(event) {
    event.preventDefault();
    this.props.dispatch(providerActionsRemove.remove(
      this.props.providerRemove.id,
    ));
  },

  handleCancel(event) {
    event.preventDefault();
    this.props.dispatch(providerActionsRemove.reset());
  },

  handleRemoveService(event) {
    event.preventDefault();
    this.props.dispatch(serviceActionsRemove.remove(
      this.props.serviceRemove.id,
    ));
  },

  handleCancelService(event) {
    event.preventDefault();
    this.props.dispatch(serviceActionsRemove.reset());
  },

  showCreate() {
    this.props.dispatch(settingsActions.open(
      <div>
        <CreateProviderForm cluster={this.props.cluster} />
        <hr style={{ margin: '30px 0' }} />
        <AllServices />
      </div>
    ));
  },

  hideCreate() {
    this.setState({
      create: false,
    });
  },

  render() {
    const clusterUrl = `/clusters/${this.props.params.clusterId}`;
    const providers = (
      this.props.cluster.providers.map(
        provider => {
          const url = `${clusterUrl}/providers/${provider.name}`;
          const identifier = {
            clusterId: this.props.params.clusterId,
            name: provider.name,
          };
          return (
            <Link to={url} key={provider.name}>
              <Provider
                name={provider.name}
                iconId={identifier}
                close={providerActionsRemove.confirm}
              />
            </Link>
          );
        }
      )
    );
    const roles = (
      <div>
        roles:
        <span>
          {
            this.props.cluster.roles ?
            this.props.cluster.roles.map(
              (role) =>
                <span key={role.name}>
                  {role.name}
                </span>
            ) :
            'No roles right now'
          }
        </span>
      </div>
    );
    if (this.props.providerRemoveStatus === 'confirm') {
      return (
        <div>
          <h1>Remove provider {this.props.providerRemove.id}?</h1>
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
    if (this.props.serviceRemoveStatus === 'confirm') {
      return (
        <div>
          <h1>Remove service {this.props.serviceRemove.id}?</h1>
          <FlatButton
            onTouchTap={this.handleRemoveService}
            label="yes"
            secondary
          />
          <FlatButton
            onTouchTap={this.handleCancelService}
            label="no"
            primary
          />
        </div>
      );
    }
    return (
      <div>
        <h2>
          Name:
          <InlineEdit
            paramName="name"
            text={this.props.cluster.name}
            change={this.dataChanged}
          />
        </h2>
        {roles}
        <div>
          <h3>Providers</h3>
          <List>
            {providers}
          </List>
        </div>
        <ClusterServiceList
          services={this.props.cluster.services}
          clusterId={this.props.params.clusterId}
        />
        <div onClick={this.showCreate}>
          <Add />
        </div>
      </div>
    );
  },
});


const routes = {
  path: ':clusterId',
  indexRoute: {
    component: connect(mapStateToProps)(ClusterDetail),
  },
  childRoutes: [
    ProviderDetail,
    ServiceProvision,
  ],
};

export default routes;
