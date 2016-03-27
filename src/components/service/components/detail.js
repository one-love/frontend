import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/detail';
import store from '../../../store';

const mapStateToProps = (state) => {
  const data = {
    service: state.serviceDetail.service,
  };
  return data;
};


const Component = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    service: React.PropTypes.object,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.serviceId));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    if (this.props.service === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <ul className="item__list">
          <li className="item__heading">
            Name: {this.props.service.name}
          </li>
          <li className="item__child">
            Author: {this.props.service.user.email}
          </li>
        </ul>
      </div>
    );
  },
});

export const Detail = connect(mapStateToProps, actions)(Component);

const routes = {
  path: ':serviceId',
  indexRoute: { component: Detail },
};

export default routes;
