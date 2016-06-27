import { SIDEBAR } from './constants';

export default function sidebar(state = { show: false }, action) {
  switch (action.type) {
    case SIDEBAR: {
      return {
        show: action.payload.show,
      };
    }
    default:
      return state;
  }
}
