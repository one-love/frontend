import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { actions } from '../../actions';


const mapStateToProps = (state) => {
  return {
    token: state.oneloveReducer.token,
  };
};


const LogoutForm = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
    children: React.PropTypes.node,
  },

  componentWillMount() {
    if (!window.localStorage.OneLoveAuthToken) {
      this.props.store.dispatch(routeActions.push('/'));
    }
  },

  shouldComponentUpdate(nextProps) {
    if (!nextProps.token) {
      this.props.store.dispatch(routeActions.push('/'));
    }
    return true;
  },

  handleSubmit(event) {
    event.preventDefault();
    window.localStorage.removeItem('OneLoveAuthToken');
    this.props.store.dispatch(routeActions.push('/'));
  },

  render() {
    return (
      <div className="form-container">
        <h1 className="form__title">Logout</h1>
        <form role="form" onSubmit={this.handleSubmit}>
          <button className="button button--primary">Logout</button>
        </form>
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(LogoutForm);
