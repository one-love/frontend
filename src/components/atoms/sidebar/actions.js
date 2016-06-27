import { createAction } from 'redux-actions';
import { SIDEBAR } from './constants';


export const showSidebar = createAction(SIDEBAR, show => ({
  show,
}));

const actions = {
  showSidebar,
};

export default actions;
