import React from 'react';
import { connect } from 'react-redux';
import Service from '../../molecules/service';
import List from '../../layouts/list';
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
        {
          this.props.services.map(
            service =>
              <Service key={service.id} name={service.name} />
          )
        }
      </div>
    );
    const index = (
      <List title="Services" service="active">
        {services}
      </List>
    );
    if (this.props.children) {
      return children;
    }
    return index;
  },
});

export default connect(mapStateToProps, actions)(ServiceList);
