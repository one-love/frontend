import { createAction } from 'redux-actions';
import { NOTIFICATIONS } from '../constants';


const open = createAction(NOTIFICATIONS, notifications => {
  console.log(notifications);
  return {
    notifications,
    open: true,
  };
});


const close = createAction(NOTIFICATIONS, () => ({
  notifications: '',
  open: false,
}));


const actions = {
  open,
  close,
};

export default actions;
