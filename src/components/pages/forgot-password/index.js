import React from 'react';
import cssModules from 'react-css-modules';
import styles from './forgot-password.scss';


function ForgotPassword() {
  return (
    <div styleName="forgot-password">
      <div>
        <h1 styleName="center">Forgot Password</h1>
      </div>
      <form role="form">
        <div styleName="position--relative">
          <input
            name="email"
            type="input"
            id="email"
            autoFocus
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <button styleName="button">Send</button>
      </form>
    </div>
  );
}


export default cssModules(ForgotPassword, styles);
