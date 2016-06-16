import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Cluster from './cluster';
import ClusterList from './cluster-list';
import Service from './service';
import ServiceList from './service-list';
import Provision from './provision';
import Settings from './settings';
import Login from './login';
import ForgotPassword from './forgot-password';
import Profile from './profile';

storiesOf('Layout', module)
  .add('login', Login)
  .add('forgot-password', ForgotPassword)
  .add('cluster', Cluster)
  .add('cluster-list', ClusterList)
  .add('settings', Settings)
  .add('service', Service)
  .add('service-list', ServiceList)
  .add('provision', Provision)
  .add('profile', Profile);
