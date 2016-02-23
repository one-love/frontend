import React from 'react';
import OneLoveApp from './OneLove';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Cluster from '../components/Cluster';
import ClusterCreate from '../components/Cluster/Create';
import ClusterEdit from '../components/Cluster/Edit';
import ClusterList from '../components/Cluster/List';
import Applications from '../components/Applications';
import { Router, IndexRoute, Route } from 'react-router';
import { history } from '../constants';
import { requireAuth } from '../utils';


const Main = React.createClass({
  render() {
    return (
      <Router history={history}>
        <Route onEnter={requireAuth} path="/" component={Layout}>
          <IndexRoute component={OneLoveApp} />
          <Route path="logout/" component={Logout} />
          <Route path="clusters/">
            <IndexRoute component={ClusterList} />
            <Route path="create/" component={ClusterCreate} />
            <Route path=":clusterId/" >
              <IndexRoute component={Cluster} />
              <Route path="applications/" component={Applications} />
              <Route path="edit/" component={ClusterEdit} />
            </Route>
          </Route>
        </Route>
        <Route path="/login/" component={Login} />
      </Router>
    );
  },
});

export default Main;
