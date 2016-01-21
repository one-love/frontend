import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { login, actions } from './actions';


const mapStateToProps = (state) => {
  return {
    token: state.oneloveReducer.token,
  };
};


const LoginForm = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
    children: React.PropTypes.node,
  },

  getInitialState() {
    return {
      email: '',
      password: '',
    };
  },

  componentWillMount() {
    if (window.localStorage.OneLoveAuthToken) {
      this.props.store.dispatch(routeActions.push('/'));
    }
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.token) {
      this.props.store.dispatch(routeActions.push('/'));
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
    this.props.store.dispatch(login(this.state.email, this.state.password));
  },

  render() {
    return (
      <div className="form-container">
        <h1 className="form__title">Login</h1>
        <form role="form" onSubmit={this.handleSubmit}>
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
          <button className="button button--primary">Submit</button>
        </form>
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(LoginForm);
