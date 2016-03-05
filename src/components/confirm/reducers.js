import { CONFIRM } from './constants';

export default function login(state = { status: 'initial' }, action) {
  switch (action.type) {
    case CONFIRM: {
      return action.payload;
    }
    default:
      return state;
  }
}
