import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router } from 'react-router';

import { wrapComponent } from './utils';
import { createHashHistory } from 'history';

import OneLove from './components/app';
import LoginForm from './components/auth/login';
import LogoutForm from './components/auth/logout';
import configureStore from './store';
import { isLoggedIn } from '././components/auth/utils';


const appTag = document.createElement('main');


function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace(nextState, '/login', '');
  }
}


appTag.setAttribute('id', 'onelove');

document.body.insertBefore(appTag, document.getElementsByTagName('script')[0]);

const history = createHashHistory({ queryKey: false });

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, history);


ReactDom.render((
  <Provider store={store}>
    <Router history={history}>
      <Route onEnter={requireAuth} path="/">
        <IndexRoute component={OneLove} />
        <Route path="logout" component={wrapComponent(LogoutForm, { store })} />
      </Route>
      <Route path="/login" component={wrapComponent(LoginForm, { store })} />
    </Router>
  </Provider>
), document.getElementById('onelove'));
