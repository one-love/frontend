import React from 'react';

const LoginForm = React.createClass({
  render() {
    return (
      <div className="form-container">
        <h1 className="form__title">Login</h1>
        <form role="form">
          <div className="form__item">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form__field"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="form__title">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form__item"
              id="password"
              ref="password"
              placeholder="Password"
            />
          </div>
          <button className="button button--primary">Submit</button>
        </form>
      </div>
    );
  },
});

export default LoginForm;
