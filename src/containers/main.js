import React from 'react';
import Login from '../components/pages/login';
import { Router } from 'react-router';
import { history } from '../constants';


const routes = {
  component: 'div',
  childRoutes: [
    /* {
     *   path: '/',
     *   component: Layout,
     *   onEnter: requireAuth,
     *   childRoutes: [
     *     Cluster,
     *     Service,
     *     Provision,
     *     Profile,
     *   ],
     * },*/
    {
      path: '/login/',
      component: Login,
    },
    /* {
     *   path: '/register/',
     *   component: Register,
     * },
     * {
     *   path: '/confirm/:uuid/',
     *   component: Confirm,
     * },*/
  ],
};

function Main() {
  return (
    <Router history={history} routes={routes} />
  );
}

export default Main;
