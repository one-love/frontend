import { createAction } from 'redux-actions';
import { NOTIFICATIONS } from '../constants';


export const open = createAction(NOTIFICATIONS, notifications => ({
  notifications,
  open: true,
}));


export const close = createAction(NOTIFICATIONS, () => ({
  notifications: '',
  open: false,
}));


const actions = {
  open,
  close,
};

export default actions;
