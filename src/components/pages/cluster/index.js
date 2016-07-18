import React from 'react';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import InlineEdit from 'react-edit-inline';
import styles from './cluster.scss';
import actions from './actions/detail';
import editActions from './actions/edit';
import pluginActions from './actions/plugin';
import providerActions from '../provider/actions/create';
import store from '../../../store';
import List from '../../molecules/transition-appear';
import Service from '../../molecules/service';
import Provider from '../../molecules/provider';
import ProviderDetail from '../provider';
import ServiceProvision from '../service-provision';
import Add from '../../atoms/add';
import Sidebar from '../../atoms/sidebar';


const mapStateToProps = (state) => {
  const data = {
    cluster: state.clusterDetail.cluster,
    roles: state.clusterDetail.roles,
    plugins: state.clusterPlugins.plugins,
    provider: state.providerCreate.provider,
    providerStatus: state.providerCreate.status,
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
  },

  getDefaultProps() {
    return {
      plugins: [],
    };
  },

  getInitialState() {
    return {
      fields: {},
      pluginProps: [],
    };
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.clusterId));
    store.dispatch(pluginActions.get());
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.providerStatus === 'success') {
      store.dispatch(actions.get(this.props.params.clusterId));
      store.dispatch(providerActions.reset());
      this.setState({ create: false });
    }
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
    store.dispatch(editActions.reset());
  },

  dataChanged(data) {
    store.dispatch(
      editActions.edit(
        this.props.params.clusterId,
        data
      )
    );
  },

  handleTypeChange(event) {
    const plugin = this.props.plugins.find((pl) =>
      pl.type === event.target.value
    );
    this.setState({ pluginProps: plugin.properties });
    this.setState({ type: event.target.value });
  },

  handleFieldChange(event) {
    const fieldName = event.target.getAttribute('placeholder');
    const fields = { ...this.state.fields };
    fields[fieldName] = event.target.value;
    this.setState({ fields });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(
      providerActions.create(
        this.props.params.clusterId,
        this.state.type,
        this.state.fields,
      )
    );
  },

  showCreate() {
    this.setState({ create: true });
  },

  hideCreate() {
    this.setState({
      create: false,
    });
  },

  render() {
    if (!this.props.cluster) {
      return '';
    }
    const clusterUrl = `/clusters/${this.props.params.clusterId}`;
    const services = (
      this.props.cluster.services.map(
        service => {
          const url = `${clusterUrl}/services/${service.id}/provision`;
          return (
            <Link to={url} key={service.id}>
              <Service name={service.name} />
            </Link>
          );
        }
      )
    );
    const providers = (
      this.props.cluster.providers.map(
        provider => {
          const url = `${clusterUrl}/providers/${provider.name}`;
          return (
            <Link to={url} key={provider.name}>
              <Provider name={provider.name} />
            </Link>
          );
        }
      )
    );
    const roles = (
      <div>
        <div styleName="label">
          roles:
        </div>
        <div styleName="item">
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
        </div>
      </div>
    );
    let clusterAdd = '';
    if (this.state.create) {
      clusterAdd = (
        <div>
          <div className="disable" onClick={this.hideCreate}>x</div>
          <h1>Create Provider</h1>
          <form role="form" onSubmit={this.handleSubmit}>
            <div>
              <select onClick={this.handleTypeChange} defaultValue="-1" >
                <option id="-1" disabled>Select type</option>
                {
                  this.props.plugins.map(
                    plugin =>
                      <option
                        key={plugin.type}
                        value={plugin.type}
                      > {plugin.type}</option>
                  )
                }
              </select>
            </div>
            <div>
              {
                this.state.type ?
                this.state.pluginProps.map(
                  props =>
                    <div key={props.name}>
                      <label>{props.name}
                        <input
                          type="text"
                          placeholder={props.name}
                          onChange={this.handleFieldChange}
                        />
                      </label>
                    </div>
                ) : ''
              }
            </div>
            <button className="button">Create</button>
          </form>
          <hr />
        </div>
      );
    }
    return (
      <div>
        <Sidebar show={this.state.create}>
          {clusterAdd}
        </Sidebar>
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
          <div styleName="label">
            providers:
          </div>
          <div styleName="item">
            <List>
              {providers}
            </List>
          </div>
        </div>
        <div>
          <div styleName="label">
            services:
          </div>
          <div styleName="item">
            <List>
              {services}
            </List>
          </div>
        </div>
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
    component: connect(mapStateToProps, actions)(
      cssModules(ClusterDetail, styles)
    ),
  },
  childRoutes: [
    ProviderDetail,
    ServiceProvision,
  ],
};

export default routes;
