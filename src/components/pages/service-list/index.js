import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import Service from '../../molecules/service';
import List from '../../molecules/transition-appear';
import actions from './actions/list';
import createActions from './actions/create';
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
  return data;
};

const ServiceList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    services: React.PropTypes.array,
    status: React.PropTypes.string,
    createStatus: React.PropTypes.string,
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
      return false;
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

  render() {
    const children = (
      <div>
        {this.props.children}
      </div>
    );
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
                <Link to={url}>
                  <Service key={service.id} name={service.name} />
                </Link>
              );
            }
          )
        }
      </div>
    );
    const index = (
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
    if (this.props.children) {
      return children;
    }
    return index;
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
