import React from 'react';
import { Link } from 'react-router';
import { storiesOf } from '@kadira/storybook';
import Header from './header';
import Footer from './footer';
import ClusterIcon from './cluster-icon';
import ServiceIcon from './service-icon';
import '../style.scss';

storiesOf('Atoms', module)
  .add('header', Header)
  .add('footer', Footer)
  .add('cluster-icon', ClusterIcon)
  .add('service-icon', ServiceIcon);
