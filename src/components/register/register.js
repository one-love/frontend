import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import store from '../../store';
import { history } from '../../constants';
import { isLoggedIn } from '../../utils';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


function mapStateToProps(state) {
  return {
    user: state.register.user,
    status: state.register.status,
    error: state.register.error,
  };
}

const Register = React.createClass({
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

  shouldComponentUpdate(nextProps) {
    if (nextProps.status == 'success') {
      history.push('/login/');
    }
    return true;
  },

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  },

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  },

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  },

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(
      actions.register(
        this.state.email,
        this.state.password,
        this.state.firstName,
        this.state.lastName
      )
    );
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
        <h1 className="form__title">Register</h1>
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
            <label htmlFor="firstName">First Name</label>
            <input
              autoFocus
              type="text"
              className="form__field"
              id="firstName"
              placeholder="First Name"
              onChange={this.handleFirstNameChange}
            />
          </div>
          <div className="form__item">
            <label htmlFor="firstName">Last Name</label>
            <input
              autoFocus
              type="text"
              className="form__field"
              id="lastName"
              placeholder="Last Name"
              onChange={this.handleLastNameChange}
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


export default connect(mapStateToProps, actions)(Register);
