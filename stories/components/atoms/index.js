import React from 'react';
import { Link } from 'react-router';
import { storiesOf } from '@kadira/storybook';
import Footer from './footer';
import MenuItem from './menu-item';
import MenuSettings from './menu-settings';
import Spinner from './spinner.js';

storiesOf('Atoms', module)
  .add('footer', Footer)
  .add('spinner', Spinner)
  .add('menu-item', MenuItem)
  .add('menu-settings', MenuSettings);
