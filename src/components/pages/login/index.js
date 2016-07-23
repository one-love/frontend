import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';
import store from '../../../store';
import { history } from '../../../constants';
import { isLoggedIn } from '../../../utils';
import { login, actions } from './actions';
import styles from './login.scss';


function mapStateToProps(state) {
  return {
    token: state.login.token,
    status: state.login.status,
    error: state.login.error,
  };
}


const Login = React.createClass({
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
    if (isLoggedIn()) {
      history.push('/');
    }
  },

  shouldComponentUpdate() {
    if (isLoggedIn()) {
      history.push('/');
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
    return (
      <div styleName="login">
        <div>
          <h1 styleName="center">Login</h1>
        </div>
        <form role="form" onSubmit={this.handleSubmit}>
          <div styleName="position--relative">
            <input
              name="email"
              type="input"
              id="email"
              onChange={this.handleEmailChange}
              styleName="input"
              autoFocus
              required
            />
            <label styleName="label" htmlFor="email">Email</label>
          </div>
          <div styleName="position--relative">
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handlePasswordChange}
              styleName="input"
              required
            />
            <label styleName="label" htmlFor="password">Password</label>
          </div>
          <RaisedButton label="login" type="submit" />
        </form>
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(cssModules(Login, styles));
