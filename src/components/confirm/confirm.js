import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import store from '../../store';
import { history } from '../../constants';
import Spinner from '../layout/spinner';


const errorMessages = {
  UNAUTHORIZED: 'Wrong user/password',
};


function mapStateToProps(state) {
  return {
    user: state.confirm.user,
    status: state.confirm.status,
    error: state.confirm.error,
  };
}

const Confirm = React.createClass({
  propTypes: {
    status: React.PropTypes.string,
    error: React.PropTypes.string,
    params: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(actions.confirm(this.props.params.uuid));
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.status === 'success') {
      history.push('/login/');
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
        <h1 className="form__title">Register</h1>
        Congratulations, you are not registered One Love user!
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(Confirm);
