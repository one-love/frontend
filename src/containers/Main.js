import React from 'react';
import OneLoveApp from './OneLove';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Logout from '../components/Logout';

import { Router, IndexRoute, Route } from 'react-router';
import { history } from '../constants';
import { requireAuth } from '../utils';

import ClusterDetail from '../components/Cluster/Detail';
import ClusterCreate from '../components/Cluster/Create';
import ClusterEdit from '../components/Cluster/Edit';
import ClusterList from '../components/Cluster/List';
import ClusterRemove from '../components/Cluster/Remove';

import ProviderDetail from '../components/Provider/Detail';
import ProviderCreate from '../components/Provider/Create';
import ProviderEdit from '../components/Provider/Edit';
import ProviderList from '../components/Provider/List';
import ProviderRemove from '../components/Provider/Remove';

import ApplicationDetail from '../components/Application/Detail';
import ApplicationCreate from '../components/Application/Create';
import ApplicationEdit from '../components/Application/Edit';
import ApplicationList from '../components/Application/List';
import ApplicationRemove from '../components/Application/Remove';


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
              <IndexRoute component={ClusterDetail} />
              <Route path="edit/" component={ClusterEdit} />
              <Route path="remove/" component={ClusterRemove} />
              <Route path="applications/">
                <IndexRoute component={ApplicationList} />
                <Route path="create/" component={ApplicationCreate} />
                <Route path=":applicationName/" >
                  <IndexRoute component={ApplicationDetail} />
                  <Route path="edit/" component={ApplicationEdit} />
                  <Route path="remove/" component={ApplicationRemove} />
                </Route>
              </Route>
              <Route path="providers/">
                <IndexRoute component={ProviderList} />
                <Route path="create/" component={ProviderCreate} />
                <Route path=":providerName/" >
                  <IndexRoute component={ProviderDetail} />
                  <Route path="edit/" component={ProviderEdit} />
                  <Route path="remove/" component={ProviderRemove} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="/login/" component={Login} />
      </Router>
    );
  },
});

export default Main;
