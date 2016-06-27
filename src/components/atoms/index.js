import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Footer from './footer';
import Icon from './icon';
import IconEdit from './icon-edit';
import MenuItem from './menu-item';
import MenuSettings from './menu-settings';
import Spinner from './spinner';
import Log from './log';
import Popup from './popup';
import Add from './add';
import Notification from './notification';


storiesOf('Atoms', module)
  .add('add', () => (<Add />))
  .add('footer', () => (<Footer />))
  .add('icon', () => (<Icon />))
  .add('icon-edit', () => (<IconEdit />))
  .add('log', () => (<Log />))
  .add('menu-item', () => (<MenuItem />))
  .add('menu-settings', () => (<MenuSettings />))
  .add('notification', () => (<Notification />))
  .add('popup', () => (<Popup />))
  .add('spinner', () => (<Spinner />))
;
