import React from 'react';
import { connect } from 'react-redux';
import Service from '../../molecules/service';
import List from '../../molecules/transition-appear';
import actions from './actions/list';
import store from '../../../store';
import serviceDetail from '../service';
import Add from '../../atoms/add';

const mapStateToProps = state => ({
  services: state.serviceList.services,
  status: state.serviceList.status,
});

const ServiceList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    services: React.PropTypes.array,
    status: React.PropTypes.string,
  },

  getInitialState() {
    return {
      showCreate: '0',
      visibility: 'hidden',
      name: '',
    };
  },

  componentWillMount() {
    store.dispatch(actions.get());
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  showCreate() {
    this.setState({ showCreate: '5rem', visibility: 'visible' });
  },
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  /* handleSumbit(event){
   *   store.dispatch(actions.create(this.state.name));
   * },*/

  render() {
    const children = (
      <div>
        {this.props.children}
      </div>
    );
    const createService = (
      <div style={{ height: this.state.showCreate, visibility: this.state.visibility }}>
        <h1>Create Service</h1>
        <form role="form">
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
          <button className="button button--primary">Create</button>
        </form>
      </div>
    );
    const services = (
      <div>
        <h1>Services</h1>
        {
          this.props.services.map(
            service => {
              const path = `services/${service.id}`;
              return <Service key={service.id} name={service.name} path={path} />;
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
  indexRoute: { component: connect(mapStateToProps, actions)(ServiceList) },
  childRoutes: [
    serviceDetail,
  ],
};

export default routes;
