import React from 'react';
import { connect } from 'react-redux';
import Service from '../../molecules/service';
import List from '../../molecules/transition-appear';
import actions from './actions';
import store from '../../../store';

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

  componentWillMount() {
    store.dispatch(actions.get());
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    const children = (
      <div>
        {this.props.children}
      </div>
    );
    const services = (
      <div>
        <h1>Services</h1>
        {
          this.props.services.map(
            service =>
              <Service key={service.id} name={service.name} id={service.id} />
          )
        }
      </div>
    );
    const index = (
      <List>
        {services}
      </List>
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
};

export default routes;
