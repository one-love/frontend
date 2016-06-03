import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Cluster from './cluster';
import ClusterList from './cluster-list';
import Service from './service';
import ServiceList from './service-list';
import Provision from './provision';
import Settings from './settings';
import Login from './login';
import Profile from './profile';
import '../style.scss';

storiesOf('Layout', module)
  .add('login', Login)
  .add('cluster', Cluster)
  .add('cluster-list', ClusterList)
  .add('settings', Settings)
  .add('service', Service)
  .add('service-list', ServiceList)
  .add('provision', Provision)
  .add('profile', Profile);
