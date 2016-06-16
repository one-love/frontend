import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div>
    <div className="content inverse full">
      <div className="login">
        <div className="o-layout o-layout--center">
          <h1 className="form__title">Login</h1>
        </div>
        <form role="form" className="form">
          <div className="position--relative">
            <input
              name="email"
              type="input"
              id="email"
              autoFocus
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="position--relative">
            <input
              type="password"
              name="password"
              id="password"
              required
             />
            <label htmlFor="password">Password</label>
          </div>
          <button className="button button--primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
);
