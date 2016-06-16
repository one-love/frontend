import React from 'react';
import { Link } from 'react-router';
import { storiesOf } from '@kadira/storybook';
import Header from './header';
import Cluster from './cluster';
import Service from './service';
import Log from './log';
import Host from './host';


storiesOf('Molecules', module)
  .add('cluster', Cluster)
  .add('service', Service)
  .add('log', Log)
  .add('header', Header)
  .add('host', Host);
