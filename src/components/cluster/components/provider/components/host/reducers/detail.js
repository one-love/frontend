import { HOST_DETAIL } from '../constants';

export default function hostDetail(state = { status: 'initial' }, action) {
  switch (action.type) {
    case HOST_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
