import React from 'react';
import cssModules from 'react-css-modules';
import styles from './service.scss';
import { connect } from 'react-redux';
import Sidebar from '../../atoms/sidebar';
import store from '../../../store';
import ApplicationList from '../../organisms/application-list';
import ApplicationDetail from '../application';
import Add from '../../atoms/add';
import actions from './actions/detail';
import createActions from '../application/actions/create';
import listActions from '../../organisms/application-list/actions';
import removeActions from '../../organisms/application-list/actions/remove';


const mapStateToProps = (state) => {
  const data = {
    service: state.serviceDetail.service,
    createStatus: state.applicationCreate.status,
    remove: state.applicationRemove.application,
    removeStatus: state.applicationRemove.status,
  };
  return data;
};


const ServiceDetail = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    service: React.PropTypes.object,
    params: React.PropTypes.object,
    createStatus: React.PropTypes.string,
    remove: React.PropTypes.object,
    removeStatus: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      service: {
        user: {},
      },
    };
  },

  getInitialState() {
    return {
      name: '',
      galaxyRole: '',
    };
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.serviceId));
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.createStatus === 'success') {
      store.dispatch(createActions.reset());
      store.dispatch(listActions.get(this.props.params.serviceId));
      this.setState({ create: false });
    } else if (nextProps.removeStatus === 'success') {
      store.dispatch(removeActions.reset());
      store.dispatch(listActions.get(this.props.params.serviceId));
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
      name: '',
    });
  },

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  handleGalaxyRoleChange(event) {
    this.setState({ galaxyRole: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(createActions.create(
      this.props.params.serviceId,
      this.state.name,
      this.state.galaxyRole,
    ));
    this.setState({
      name: '',
      galaxyRole: '',
    });
  },

  handleRemove(event) {
    event.preventDefault();
    store.dispatch(removeActions.remove(
      this.props.remove.id,
    ));
  },

  handleCancel(event) {
    event.preventDefault();
    store.dispatch(removeActions.reset());
  },

  render() {
    if (this.props.removeStatus === 'confirm') {
      return (
        <div>
          <h1>Remove application {this.props.remove.id}?</h1>
          <button className="button" onClick={this.handleRemove}>yes</button>
          <button className="button" onClick={this.handleCancel}>no</button>
        </div>
      );
    }
    let createApplication = '';
    if (this.state.create) {
      createApplication = (
        <div>
          <div className="disable" onClick={this.hideCreate}>x</div>
          <h1>Create Application</h1>
          <form role="form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                autoFocus
                type="text"
                id="name"
                placeholder="Name"
                onChange={this.handleNameChange}
                value={this.state.name}
              />
            </div>
            <div>
              <label htmlFor="galaxyRole">Galaxy Role</label>
              <input
                type="text"
                id="galaxyRole"
                placeholder="Galaxy Role"
                onChange={this.handleGalaxyRoleChange}
                value={this.state.galaxyRole}
              />
            </div>
            <button className="button">Create</button>
          </form>
        </div>
      );
    }
    return (
      <div>
        <Sidebar show={this.state.create}>
          {createApplication}
        </Sidebar>
        <div>
          <h2>Service: {this.props.service.name}</h2>
          <div styleName="item">
            <h3>email: {this.props.service.user.email}</h3>
          </div>
        </div>
        <div>
          <ApplicationList serviceId={this.props.params.serviceId} />
        </div>
        <div onClick={this.showCreate}>
          <Add />
        </div>
      </div>
    );
  },
});


const routes = {
  path: ':serviceId',
  indexRoute: {
    component: connect(mapStateToProps, actions)(
      cssModules(ServiceDetail, styles)
    ),
  },
  childRoutes: [
    ApplicationDetail,
  ],
};

export default routes;
