import React from 'react';
import { connect } from 'react-redux';
import { get } from '../actions/detail';
import actions from '../actions/edit';
import store from '../../../../../../../store';
import { history } from '../../../../../../../constants';
import Spinner from '../../../../../../layout/spinner';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => ({
  host: state.hostEdit.host,
  status: state.hostEdit.status,
  error: state.hostEdit.error,
});


const HostEdit = React.createClass({
  propTypes: {
    host: React.PropTypes.object,
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      name: '',
    };
  },

  componentWillMount() {
    store.dispatch(get(
      this.props.params.clusterId,
      this.props.params.providerName,
      this.props.params.hostname
    ));
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
    store.dispatch(actions.edit(
      this.props.params.clusterId,
      this.props.params.providerName,
      this.props.params.hostname,
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
        <h1 className="form__title">Edit Host</h1>
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
            <label htmlFor="ip">IP</label>
            <input
              autoFocus
              type="text"
              className="form__field"
              id="ip"
              placeholder="IP"
              onChange={this.handleIPChange}
            />
          </div>
          <button className="button button--primary">Edit</button>
        </form>
      </div>
    );
  },
});


const routes = {
  path: 'edit',
  component: connect(mapStateToProps, actions)(HostEdit),
};

export default routes;
