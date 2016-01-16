import React from 'react';
import ReactDom from 'react-dom';
import LoginForm from './components/hello';
import OneLove from './components/app';
import {
  Route,
  Router,
} from 'react-router';
import {
  isLoggedIn,
} from './utils/auth';

const appTag = document.createElement('main');

function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace(nextState, '/login', '');
  }
}

appTag.setAttribute('id', 'onelove');

document.body.insertBefore(appTag, document.getElementsByTagName('script')[0]);

ReactDom.render((
  <Router>
    <Route onEnter={requireAuth} path="/" component={OneLove} />
    <Route path="/login" component={LoginForm} />
  </Router>
), document.getElementById('onelove'));
