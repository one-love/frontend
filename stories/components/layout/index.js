import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Cluster from './cluster';
import Service from './service';
import Provision from './provision';
import Settings from './settings';
import '../style.scss';

storiesOf('Layout', module)
  .add('cluster', Cluster)
  .add('service', Service)
  .add('provision', Provision)
  .add('settings', Settings);
