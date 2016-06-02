import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from './header';
import Footer from './footer';
import OneLove from '../one-love';
import store from '../../store';
import actions from './actions';
import { history, postLogoutURL } from '../../constants';
import './index.scss';


const mapStateToProps = state => ({
  status: state.settingsShow.status,
});


const Layout = React.createClass({
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
    const children = this.props.children || <OneLove />;
    let settings = '';
    if (this.props.status === 'shown') {
      settings = (
        <div className="settings">
          <div className="disable" onClick={this.handleOnClick}>x</div>
          <div className="items">
            <Link to={'/'}>Profile</Link>
            <a href="" onClick={this.handleLogout}>Logout</a>
          </div>
        </div>
      );
    }
    return (
      <div>
        {settings}
        <Header />
        <div className="content">
          {children}
        </div>
        <center><Footer /></center>
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(Layout);
