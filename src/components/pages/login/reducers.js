import { BACKEND, LOGIN } from './constants';

export function login(state = { status: 'initial' }, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        token: action.payload.token,
        error: action.payload.error,
        status: action.payload.status,
      };
    }
    default:
      return state;
  }
}

export function backend(state = { status: 'initial' }, action) {
  switch (action.type) {
    case BACKEND: {
      return action.payload;
    }
    default:
      return state;
  }
}
