import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from './actions/list';
import store from '../../store';
import create from './components/create';

const mapStateToProps = state => ({
  services: state.serviceList.services,
  status: state.serviceList.status,
});

const Component = React.createClass({
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
    const index = (
      <div>
        <h2>My services:</h2>
        <ul>
          {
            this.props.services.map(
              service =>
              <li key={service.id}>
                <h4>{service.name}</h4>
              </li>
            )
          }
        </ul>
        <Link to={'/services/create/'}>Create</Link>
      </div>
    );
    if (this.props.children) {return children;}
    return index;
  },
});

export const List = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'services',
  indexRoute: { component: List },
  childRoutes: [
    create,
  ],
};

export default routes;
