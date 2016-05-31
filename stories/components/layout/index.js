import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Cluster from './cluster';
import Service from './service';
import '../style.scss';

storiesOf('Layout', module)
  .add('cluster', Cluster)
  .add('service', Service);
