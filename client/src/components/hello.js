import React from 'react';
import { login } from '../utils/auth';

const LoginForm = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: '',
    };
  },

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  },

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  },

  handleClick() {
    login(this.state.email, this.state.password);
  },

  render() {
    return (
      <div className="form-container">
        <h1 className="form__title">Login</h1>
        <form role="form">
          <div className="form__item">
            <label htmlFor="email">Email</label>
            <input
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
          <button onClick={this.handleClick} className="button button--primary">Submit</button>
        </form>
      </div>
    );
  },
});

export default LoginForm;
