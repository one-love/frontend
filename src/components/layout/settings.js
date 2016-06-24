import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import store from '../../store';
import actions from './actions';
import { history, postLogoutURL } from '../../constants';
import './index.scss';


const mapStateToProps = state => ({
  status: state.settingsShow.status,
});


const Settings = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    status: React.PropTypes.string,
  },

  handleOnClick() {
    store.dispatch(actions.hide());
  },

  handleLogout(event) {
    event.preventDefault();
    window.localStorage.removeItem('OneLoveAuthToken');
    store.dispatch(actions.hide());
    history.push(postLogoutURL);
  },

  render() {
    return (
      <div className={this.props.status === 'shown' ? 'settings--shown' : 'settings--hiden'} >
        <div className="disable" onClick={this.handleOnClick}>x</div>
        <div className="items">
          <Link to={'/profile/'}>Profile</Link>
          <a href="" onClick={this.handleLogout}>Logout</a>
        </div>
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(Settings);
