import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/create';
import store from '../../../store';
import { history } from '../../../constants';
import Spinner from '../../layout/spinner';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => {
  const data = {
    cluster: state.clusterCreate.cluster,
    status: state.clusterCreate.status,
  };
  return data;
};


const ClusterCreate = React.createClass({
  propTypes: {
    cluster: React.PropTypes.object,
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      name: '',
      username: '',
      sshkey: '',
    };
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      history.push(`/clusters/${nextProps.cluster.id}/`);
      return false;
    }
    return true;
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  },

  handleSSHKeyChange(event) {
    this.setState({ sshkey: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(
      actions.create(
        this.state.name,
        this.state.username,
        this.state.sshkey
      )
    );
  },

  render() {
    let spinner = '';
    let error = '';
    switch (this.props.status) {
      case 'pending':
        spinner = <Spinner />;
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
        <h1 className="form__title">Create Cluster</h1>
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="form__item">
            <label htmlFor="name">Name</label>
            <input
              autoFocus
              type="text"
              className="form__field"
              id="name"
              placeholder="Name"
              onChange={this.handleNameChange}
            />
          </div>
          <div className="form__item">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form__field"
              id="username"
              placeholder="Username"
              onChange={this.handleUsernameChange}
            />
          </div>
          <div className="form__item">
            <label htmlFor="sshkey">SSH Key</label>
            <input
              type="text"
              className="form__field"
              id="sshkey"
              placeholder="SSH Key"
              onChange={this.handleSSHKeyChange}
            />
          </div>
          <button className="button button--primary">Create</button>
        </form>
      </div>
    );
  },
});


const routes = {
  path: 'create',
  component: connect(mapStateToProps, actions)(ClusterCreate),
};

export default routes;
