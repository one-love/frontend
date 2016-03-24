import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/create';
import store from '../../../store';
import { history } from '../../../constants';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => {
  const data = {
    service: state.serviceCreate.service,
    status: state.serviceCreate.status,
  };
  return data;
};


const Component = React.createClass({
  propTypes: {
    service: React.PropTypes.object,
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  getInitialState() {
    return {
      name: '',
    };
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      history.push('/services/');
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

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(actions.create(this.state.name));
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
        <h1 className="form__title">Create Service</h1>
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
          <button className="button button--primary">Create</button>
        </form>
      </div>
    );
  },
});

export const Create = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'create',
  component: Create,
};

export default routes;
