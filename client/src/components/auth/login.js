import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { login, actions } from './actions';
import store from '../../store';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = (state) => {
  console.log(state.onelove);
  return {
    token: state.onelove.token,
    status: state.onelove.status,
    error: state.onelove.error,
  };
};

const LoginForm = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      email: '',
      password: '',
    };
  },

  componentWillMount() {
    if (window.localStorage.OneLoveAuthToken) {
      store.dispatch(routeActions.push('/'));
    }
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.token) {
      store.dispatch(routeActions.push('/'));
    }
    return true;
  },

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  },

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(login(this.state.email, this.state.password));
  },

  render() {
    let spinner = '';
    let error = '';
    switch (this.props.status) {
      case 'pending':
        spinner = <div>spinner</div>;
        break;
      case 'error':
        error = <div>{errorMessages[this.props.error]}</div>;
        break;
      default:
        break;
    }
    return (
      <div className="form-container">
        {spinner}
        {error}
        <h1 className="form__title">Login</h1>
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="form__item">
            <label htmlFor="email">Email</label>
            <input
              autoFocus
              type="text"
              className="form__field"
              id="email"
              placeholder="Email"
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="form__item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form__field"
              id="password"
              ref="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
            />
          </div>
          <button className="button button--primary">Submit</button>
        </form>
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(LoginForm);
