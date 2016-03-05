import { REGISTER } from './constants';

export default function login(state = { status: 'initial' }, action) {
  switch (action.type) {
    case REGISTER: {
      return action.payload;
    }
    default:
      return state;
  }
}
