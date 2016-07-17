import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import Service from '../../molecules/service';
import List from '../../molecules/transition-appear';
import actions from './actions';
import createActions from './actions/create';
import removeActions from './actions/remove';
import store from '../../../store';
import serviceDetail from '../service';
import Add from '../../atoms/add';
import styles from './styles.scss';

const mapStateToProps = state => {
  const data = {
    services: state.serviceList.services,
    status: state.serviceList.status,
  };
  if (state.serviceCreate) {
    data.createStatus = state.serviceCreate.status;
  }
  if (state.serviceRemove) {
    data.removeStatus = state.serviceRemove.status;
    data.removeService = state.serviceRemove.service;
  }
  return data;
};

const ServiceList = React.createClass({
  propTypes: {
    services: React.PropTypes.array,
    status: React.PropTypes.string,
    createStatus: React.PropTypes.string,
    iconId: React.PropTypes.string,
    close: React.PropTypes.func,
    removeStatus: React.PropTypes.string,
    removeService: React.PropTypes.object,
  },

  getInitialState() {
    return {
      display: 'none',
      name: '',
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

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(createActions.create(this.state.name));
    this.setState({ name: '' });
  },

  handleClose(event) {
    event.preventDefault();
    store.dispatch(this.props.close(this.props.iconId));
  },

  handleRemove(event) {
    event.preventDefault();
    store.dispatch(removeActions.remove(this.props.removeService.id));
  },

  handleCancel(event) {
    event.preventDefault();
    store.dispatch(removeActions.reset());
  },

  render() {
    const createService = (
      <div style={{ display: this.state.display }}>
        <h1>Create Service</h1>
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="form__item">
            <label htmlFor="name">Name</label>
            <input
              autoFocus
              type="text"
              className="form__field"
              id="name"
              placeholder="Name"
              onChange={this.handleNameChange}
            />
          </div>
          <button styleName="button">Create</button>
        </form>
      </div>
    );
    const services = (
      <div>
        <h1>Services</h1>
        {
          this.props.services.map(
            service => {
              const url = `services/${service.id}`;
              return (
                <Link to={url} key={service.id}>
                  <Service
                    name={service.name}
                    iconId={service.id}
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
          <h1>Remove service {this.props.removeService.id}?</h1>
          <button styleName="button" onClick={this.handleRemove}>yes</button>
          <button styleName="button" onClick={this.handleCancel}>no</button>
        </div>
      );
    }
    return (
      <div>
        {createService}
        <List>
          {services}
        </List>
        <div onClick={this.showCreate}>
          <Add />
        </div>
      </div>
    );
  },
});

const routes = {
  path: 'services',
  indexRoute: {
    component: connect(mapStateToProps, actions)(
      cssModules(ServiceList, styles)
    ),
  },
  childRoutes: [
    serviceDetail,
  ],
};

export default routes;
