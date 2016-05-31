import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Footer from '../../../src/components/layout/footer';
import '../style.scss';

storiesOf('Footer', module)
  .add('footer', () => (
    <Footer />
  ));
