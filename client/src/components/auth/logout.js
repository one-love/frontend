import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { actions } from './actions';
import { postLogoutURL } from '../../constants';
import store from '../../store';


const mapStateToProps = (state) => {
  return {
    token: state.onelove.token || '',
  };
};


const LogoutForm = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },

  componentWillMount() {
    if (!window.localStorage.OneLoveAuthToken) {
      store.dispatch(routeActions.push(postLogoutURL));
    }
  },

  shouldComponentUpdate(nextProps) {
    if (!nextProps.token) {
      store.dispatch(routeActions.push(postLogoutURL));
    }
    return true;
  },

  handleSubmit(event) {
    event.preventDefault();
    window.localStorage.removeItem('OneLoveAuthToken');
    store.dispatch(routeActions.push(postLogoutURL));
  },

  render() {
    return (
      <div className="form-container">
        <h1 className="form__title">Logout</h1>
        <form role="form" onSubmit={this.handleSubmit}>
          <button className="button button--primary">Logout</button>
        </form>
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(LogoutForm);
