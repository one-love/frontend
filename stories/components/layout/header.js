import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Header from '../../../src/components/layout/header';
import '../style.scss';

storiesOf('Header', module)
  .add('header', () => (
    <Header />
  ));
