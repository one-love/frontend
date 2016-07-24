import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import store from '../../../store';
import { history } from '../../../constants';
import { isLoggedIn } from '../../../utils';
import { login, actions } from './actions';


function mapStateToProps(state) {
  return {
    token: state.login.token,
    status: state.login.status,
    error: state.login.error,
  };
}


const styles = {
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    padding: '50px',
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
  },
};


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
      <div style={styles.root}>
        <Paper zDepth={3}>
          <form style={styles.form} onSubmit={this.handleSubmit}>
            <h1 style={styles.title}>Login</h1>
            <div>
              <TextField
                floatingLabelText="Email"
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <TextField
                floatingLabelText="Password"
                type="password"
                onChange={this.handlePasswordChange}
              />
            </div>
            <div style={styles.button}>
              <RaisedButton label="login" type="submit" />
            </div>
          </form>
        </Paper>
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(cssModules(Login, styles));
