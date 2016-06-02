import { createAction } from 'redux-actions';
import { SETTINGS_SHOW } from './constants';

export const show = createAction(SETTINGS_SHOW, () => ({
  status: 'shown',
}));

export const hide = createAction(SETTINGS_SHOW, () => ({
  status: 'hidden',
}));

const actions = {
  show,
  hide,
};

export default actions;
