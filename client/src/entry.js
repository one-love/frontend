import React from 'react';
import ReactDom from 'react-dom';
import LoginForm from './components/hello';
import OneLove from './components/app';
import {
  Route,
  Router,
} from 'react-router';

ReactDom.render((
  <Router>
    <Route path="/" component={OneLove} />
    <Route path="/login" component={LoginForm} />
  </Router>
), document.getElementById('onelove'));
