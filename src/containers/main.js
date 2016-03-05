import React from 'react';
import Layout from '../components/layout';
import Logout from '../components/auth';
import Login from '../components/auth/login';
import Cluster from '../components/cluster';
import Register from '../components/register/register';
import Confirm from '../components/confirm/confirm';
import { requireAuth } from '../utils';

import { Router } from 'react-router';
import { history } from '../constants';


const routes = {
  component: 'div',
  childRoutes: [
    {
      path: '/',
      component: Layout,
      onEnter: requireAuth,
      childRoutes: [
        Logout,
        Cluster,
      ],
    },
    {
      path: '/login/',
      component: Login,
    },
    {
      path: '/register/',
      component: Register,
    },
    {
      path: '/confirm/:uuid/',
      component: Confirm,
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
