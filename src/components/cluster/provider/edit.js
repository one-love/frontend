import React from 'react';
import { connect } from 'react-redux';
import { get } from './actions/detail';
import actions from './actions/edit';
import store from '../../../store';
import { history } from '../../../constants';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => ({
  provider: state.providerEdit.provider,
  status: state.providerEdit.status,
  error: state.providerEdit.error,
});


const Component = React.createClass({
  propTypes: {
    provider: React.PropTypes.object,
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
      this.props.params.providerId
    ));
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      history.push(
        `/clusters/${nextProps.params.clusterId}/providers/${nextProps.provider.name}/`
      );
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

  handleTypeChange(event) {
    this.setState({ type: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.edit(
      this.props.params.clusterId,
      this.props.params.providerName,
      this.state.name,
      this.state.type
    ));
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
        <h1 className="form__title">Edit Provider</h1>
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
            <label htmlFor="type">Type</label>
            <input
              autoFocus
              type="text"
              className="form__field"
              id="type"
              placeholder="Type"
              onChange={this.handleTypeChange}
            />
          </div>
          <button className="button button--primary">Edit</button>
        </form>
      </div>
    );
  },
});

export const Edit = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'edit',
  component: Edit,
};

export default routes;
