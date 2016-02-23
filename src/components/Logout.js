import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions/login';
import { postLogoutURL } from '../constants';
import { history } from '../constants';


const mapStateToProps = (state) => ({ token: state.login.token || '' });


const Logout = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },

  componentWillMount() {
    if (!window.localStorage.OneLoveAuthToken) {
      history.push(postLogoutURL);
    }
  },

  shouldComponentUpdate(nextProps) {
    if (!nextProps.token) {
      history.push(postLogoutURL);
    }
    return true;
  },

  handleSubmit(event) {
    event.preventDefault();
    window.localStorage.removeItem('OneLoveAuthToken');
    history.push(postLogoutURL);
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


export default connect(mapStateToProps, actions)(Logout);
