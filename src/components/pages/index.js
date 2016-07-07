import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Cluster from './cluster';
import ClusterList from './cluster-list';
import Service from './service';
import ServiceList from './service-list';
import Provision from './provision';
import ProvisionList from './provision-list';
import Login from './login';
import ForgotPassword from './forgot-password';
import Host from './host';
import HostList from './host-list';
import Application from './application';
import ApplicationList from './application-list';


storiesOf('Pages', module)
  .add('application', () => (<Application />))
  .add('application-list', () => (<ApplicationList />))
  .add('cluster', () => (<Cluster />))
  .add('cluster-list', () => (<ClusterList />))
  .add('forgot-password', () => (<ForgotPassword />))
  .add('host', () => (<Host />))
  .add('host-list', () => (<HostList />))
  .add('login', () => (<Login />))
  .add('provision', () => (<Provision />))
  .add('provision-list', () => (<ProvisionList />))
  .add('service', () => (<Service />))
  .add('service-list', () => (<ServiceList />))
;
