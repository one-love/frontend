import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/create';
import store from '../../../../../../../store';
import { history } from '../../../../../../../constants';
import Spinner from '../../../.../../../../../layout/spinner';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => {
  const data = {
    host: state.hostCreate.host,
    status: state.hostCreate.status,
  };
  return data;
};


const HostCreate = React.createClass({
  propTypes: {
    host: React.PropTypes.object,
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      hostname: '',
      ip: '',
    };
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      let link = `/clusters/${nextProps.params.clusterId}`;
      link += `/providers/${nextProps.params.providerName}`;
      link += `/hosts/${nextProps.host.hostname}/`;
      history.push(link);
      return false;
    }
    return true;
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  handleHostnameChange(event) {
    this.setState({ hostname: event.target.value });
  },

  handleIPChange(event) {
    this.setState({ ip: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.create(
      this.props.params.clusterId,
      this.props.params.providerName,
      this.state.hostname,
      this.state.ip
    ));
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
        <h1 className="form__title">Create Host</h1>
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="form__item">
            <label htmlFor="hostname">Hostname</label>
            <input
              autoFocus
              type="text"
              className="form__field"
              id="hostname"
              placeholder="Hostname"
              onChange={this.handleHostnameChange}
            />
          </div>
          <div className="form__item">
            <label htmlFor="IP">IP</label>
            <input
              type="text"
              className="form__field"
              id="ip"
              placeholder="IP"
              onChange={this.handleIPChange}
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
  component: connect(mapStateToProps, actions)(HostCreate),
};

export default routes;
