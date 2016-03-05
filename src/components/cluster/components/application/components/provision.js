import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/provision';
import store from '../../../../../store';
import { history } from '../../../../../constants';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


const mapStateToProps = state => ({
  application: state.applicationProvision.application,
  status: state.applicationProvision.status,
  error: state.applicationProvision.error,
});


const Component = React.createClass({
  propTypes: {
    application: React.PropTypes.object,
    params: React.PropTypes.object,
    status: React.PropTypes.string,
    error: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(
      actions.provision(
        this.props.params.clusterId,
        this.props.params.applicationName
      )
    );
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      history.push(
        `/clusters/${nextProps.params.clusterId}/applications/${nextProps.application.name}/`
      );
      return false;
    }
    return true;
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
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
        <h1 className="form__title">Provision Application</h1>
      </div>
    );
  },
});

export const Provision = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'provision',
  component: Provision,
};

export default routes;
