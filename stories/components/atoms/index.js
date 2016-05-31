import React from 'react';
import { Link } from 'react-router';
import { storiesOf } from '@kadira/storybook';
import Header from './header';
import Footer from './footer';
/* import Footer from './footer';*/
import '../style.scss';

storiesOf('Atoms', module)
  .add('header', Header)
  .add('footer', Footer);
