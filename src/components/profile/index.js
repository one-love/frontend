import React from 'react';
import actions from './actions/detail';
import { connect } from 'react-redux';
import store from '../../store';

const mapStateToProps = (state) => {
  const data = {
    me: state.meDetail.me,
  };
  return data;
};
const Profile = React.createClass({
  propTypes: {
    me: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(actions.get());
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    if (this.props.me === undefined) {
      return <div> </div>;
    }
    return (
      <div>
        <div>username: {this.props.me.username}</div>
        <div>email: {this.props.me.email}</div>
        <div>first name: {this.props.me.first_name}</div>
        <div>last name: {this.props.me.last_name}</div>
      </div>
    );
  },
});

const routes = {
  path: 'profile',
  indexRoute: { component: connect(mapStateToProps, actions)(Profile) },
};
export default routes;
