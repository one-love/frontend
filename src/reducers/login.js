import { LOGIN } from '../constants/ActionTypes';

export default function login(state = { status: 'initial' }, action) {
  switch (action.type) {
    case LOGIN:
      return { token: action.payload.token };
    default:
      return state;
  }
}
