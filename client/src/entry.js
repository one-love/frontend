import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router } from 'react-router';

import OneLove from './components/onelove';
import LoginForm from './components/auth/login';
import LogoutForm from './components/auth/logout';
import { history, default as store } from './store';
import { requireAuth } from './components/auth/utils';
import Layout from './components/layout';
import ClusterList from './components/cluster/list';
import Cluster from './components/cluster';
import { initApp } from './utils';


initApp();

ReactDom.render((
  <Provider store={store}>
    <Router history={history}>
      <Route onEnter={requireAuth} path="/" component={Layout}>
        <IndexRoute component={OneLove} />
        <Route path="logout/" component={LogoutForm} />
        <Route path="clusters/">
          <IndexRoute component={ClusterList} />
          <Route path=":clusterId/" component={Cluster} />
        </Route>
      </Route>
      <Route path="/login/" component={LoginForm} />
    </Router>
  </Provider>
), document.getElementById('onelove'));
