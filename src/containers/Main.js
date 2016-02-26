import React from 'react';
import Layout from '../components/Layout';
import Logout from '../components/Auth';
import Login from '../components/Auth/Login';
import Cluster from '../components/Cluster';

import { Router } from 'react-router';
import { history } from '../constants';


const routes = {
  component: 'div',
  childRoutes: [
    {
      path: '/',
      component: Layout,
      childRoutes: [
        Logout,
        Cluster,
      ],
    },
    {
      path: '/login/',
      component: Login,
    },
  ],
};

const Main = React.createClass({
  render() {
    return (
      <Router history={history} routes={routes} />
    );
  },
});

export default Main;
