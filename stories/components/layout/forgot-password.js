import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import styles from './forgot-password.scss';

function ForgotPassword() {
  return (
    <div>
      <div>
        <div styleName="forgot-password">
          <div className="o-layout o-layout--center">
            <h1>Forgot Password</h1>
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
            <button styleName="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default CSSModules(ForgotPassword, styles);
