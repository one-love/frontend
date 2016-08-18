import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import ApplicationList from '../../organisms/application-list';
import ApplicationDetail from '../application';
import Add from '../../atoms/add';
import actions from './actions/detail';
import editActions from './actions/edit';
import createActions from '../../molecules/application/actions/create';
import listActions from '../../organisms/application-list/actions';
import removeActions from '../../organisms/application-list/actions/remove';
import settingsActions from '../../layouts/layout/actions/settings';
import CreateApplicationForm from '../../molecules/application/createForm';
import InlineEdit from 'react-edit-inline';
import notificationActions from '../../layouts/layout/actions/notifications';


const mapStateToProps = (state) => {
  const data = {
    service: state.serviceDetail.service,
    createStatus: state.applicationCreate.status,
    remove: state.applicationRemove.application,
    removeStatus: state.applicationRemove.status,
    serviceEdit: state.serviceEdit.service,
    serviceEditStatus: state.serviceEdit.status,
    error: state.serviceEdit.error,
  };
  return data;
};


const ServiceDetail = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    service: React.PropTypes.object.isRequired,
    params: React.PropTypes.object,
    createStatus: React.PropTypes.string,
    remove: React.PropTypes.object,
    removeStatus: React.PropTypes.string,
    dispatch: React.PropTypes.func.isRequired,
    serviceEdit: React.PropTypes.object,
    serviceEditStatus: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      service: {
        user: {},
        name: 'Name',
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
    this.props.dispatch(actions.get(this.props.params.serviceId));
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.createStatus === 'success') {
      this.props.dispatch(createActions.reset());
      this.props.dispatch(listActions.get(this.props.params.serviceId));
    } else if (nextProps.removeStatus === 'success') {
      this.props.dispatch(removeActions.reset());
      this.props.dispatch(listActions.get(this.props.params.serviceId));
    }
    if (nextProps.serviceEditStatus === 'error') {
      this.props.dispatch(editActions.reset());
      this.props.dispatch(notificationActions.open(nextProps.error));
      this.props.dispatch(actions.get(this.props.params.serviceId));
    }
  },

  componentWillUnmount() {
    this.props.dispatch(actions.reset());
  },

  dataChanged(data) {
    this.props.dispatch(
      editActions.edit(
        this.props.params.serviceId,
        data,
      )
    );
  },

  showCreate() {
    this.props.dispatch(
      settingsActions.open(
        <CreateApplicationForm serviceId={this.props.params.serviceId} />
      )
    );
  },

  hideCreate() {
    this.setState({
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
    this.props.dispatch(createActions.create(
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
    this.props.dispatch(removeActions.remove(
      this.props.remove.id,
    ));
  },

  handleCancel(event) {
    event.preventDefault();
    this.props.dispatch(removeActions.reset());
  },

  render() {
    if (this.props.removeStatus === 'confirm') {
      return (
        <div>
          <h1>Remove application {this.props.remove.id}?</h1>
          <FlatButton
            label="yes"
            onTouchTap={this.handleRemove}
            secondary
          />
          <FlatButton
            label="no"
            onTouchTap={this.handleCancel}
            primary
          />
        </div>
      );
    }
    return (
      <div>
        <div>
        <h2>
          Name:
          <InlineEdit
            paramName="name"
            text={this.props.service.name}
            change={this.dataChanged}
          />
        </h2>
          <div>
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
    component: connect(mapStateToProps)(ServiceDetail),
  },
  childRoutes: [
    ApplicationDetail,
  ],
};

export default routes;
