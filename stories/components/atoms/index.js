import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Header from '../../../src/components/layout/header';
import Footer from '../../../src/components/layout/footer';
import '../style.scss';

storiesOf('Atoms', module)
  .add('header', () => (
    <Header />
  ))
  .add('footer', () => (
    <Footer />
  ));
