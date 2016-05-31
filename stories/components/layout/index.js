import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Layout from '../../../src/components/layout';
import '../style.scss';

storiesOf('Layout', module)
  .add('layout', () => (
    <Layout />
  ));
