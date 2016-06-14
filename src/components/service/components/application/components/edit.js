import React from 'react';
import { connect } from 'react-redux';
import { get } from '../actions/detail';
import actions from '../actions/edit';
import store from '../../../../../store';
import { history } from '../../../../../constants';
import Spinner from '../../../../layout/spinner';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => ({
  application: state.applicationEdit.application,
  status: state.applicationEdit.status,
  error: state.applicationEdit.error,
});


const ApplicationEdit = React.createClass({
  propTypes: {
    application: React.PropTypes.object,
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
      this.props.params.serviceId,
      this.props.params.applicationName
    ));
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      history.push(
        `/services/${nextProps.params.serviceId}/`
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
    this.setState({ galaxy_role: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.edit(
      this.props.params.serviceId,
      this.props.params.applicationName,
      this.state.name,
      this.state.galaxy_role
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
        <h1 className="form__title">Edit Application</h1>
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
              id="galaxy_role"
              placeholder="galaxy_role"
              onChange={this.handleTypeChange}
            />
          </div>
          <button className="button button--primary">Edit</button>
        </form>
      </div>
    );
  },
});


const routes = {
  path: 'applications/:applicationName/edit',
  component: connect(mapStateToProps, actions)(ApplicationEdit),
};

export default routes;
