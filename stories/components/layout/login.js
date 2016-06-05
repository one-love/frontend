import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div>
    <div className="content inverse full">
      <div className="login">
        <h1 className="form__title">Login</h1>
        <form role="form">
          <div className="form__item">
            <input
              autoFocus
              type="text"
              className="form__field"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form__item">
            <input
              type="password"
              className="form__field"
              id="password"
              placeholder="Password"
            />
          </div>
          <button className="button button--primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
);
