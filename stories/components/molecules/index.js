import React from 'react';
import { Link } from 'react-router';
import { storiesOf } from '@kadira/storybook';
import Header from './header';
import Cluster from './cluster';
import Service from './service';
import '../style.scss';

storiesOf('Molecules', module)
  .add('header', Header)
  .add('cluster', Cluster)
  .add('service', Service);
