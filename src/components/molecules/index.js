import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Cluster from './cluster';
import Header from './header';
import Host from './host';
import Provision from './provision';
import Service from './service';
import Application from './application';


storiesOf('Molecules', module)
  .add('application', () => (<Application />))
  .add('cluster', () => (<Cluster />))
  .add('header', () => (<Header />))
  .add('host', () => (<Host />))
  .add('provision', () => (<Provision />))
  .add('service', () => (<Service />))
;
