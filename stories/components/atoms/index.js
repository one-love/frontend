import React from 'react';
import { Link } from 'react-router';
import { storiesOf } from '@kadira/storybook';
import Footer from './footer';
import MenuItem from './menu-item';
import MenuSettings from './menu-settings';
import '../style.scss';

storiesOf('Atoms', module)
  .add('footer', Footer)
  .add('menu-item', MenuItem)
  .add('menu-settings', MenuSettings);
