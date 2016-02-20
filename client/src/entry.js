import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router } from 'react-router';

import { wrapComponent } from './utils';

import OneLove from './components/app';
import LoginForm from './components/auth/login';
import LogoutForm from './components/auth/logout';
import { history, store } from './store';
import { isLoggedIn } from './components/auth/utils';
import Layout from './components/layout';

const appTag = document.createElement('main');

function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace(nextState, '/login', '');
  }
}


appTag.setAttribute('id', 'onelove');

document.getElementsByTagName('body')[0]
  .insertBefore(appTag, document.body.childNodes[0]);


ReactDom.render((
  <Provider store={store}>
    <Router history={history}>
      <Route onEnter={requireAuth} path="/" component={Layout}>
        <IndexRoute component={wrapComponent(OneLove)} />
        <Route path="logout" component={wrapComponent(LogoutForm)} />
      </Route>
      <Route path="/login" component={wrapComponent(LoginForm)} />
    </Router>
  </Provider>
), document.getElementById('onelove'));
