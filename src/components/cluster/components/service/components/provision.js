import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/provision';
import store from '../../../../../store';
import { history } from '../../../../../constants';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => {
  const data = {
    status: state.provision.status,
    error: state.provision.error,
    provision: state.provision.provision,
  };
  return data;
};


const Component = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
    provision: React.PropTypes.object,
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      history.push(`/provisions/${nextProps.provision.id}`);
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
    store.dispatch(actions.provisionService(
      this.props.params.clusterId,
      this.props.params.serviceId
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
        <h1 className="form__title">Run provision</h1>
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="form__item">
            <label htmlFor="name">Are you sure to run provision?</label>
          </div>
          <button className="button button--primary">Run</button>
        </form>
      </div>
    );
  },
});

export const Provision = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'provision/:serviceId',
  component: Provision,
};

export default routes;
