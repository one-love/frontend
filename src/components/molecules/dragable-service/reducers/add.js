import { ADD_SERVICE } from '../constants';

export default function applicationList(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case ADD_SERVICE:
      return action.payload;
    default:
      return state;
  }
}
