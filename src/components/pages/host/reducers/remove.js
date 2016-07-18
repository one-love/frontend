import { HOST_REMOVE } from '../constants';

export default function hostRemove(state = { status: 'initial' }, action) {
  switch (action.type) {
    case HOST_REMOVE:
      return action.payload;
    default:
      return state;
  }
}
