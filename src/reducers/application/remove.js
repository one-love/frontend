import { APPLICATION_REMOVE } from '../../constants/ActionTypes';

export default function applicationRemove(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case APPLICATION_REMOVE:
      return action.payload;
    default:
      return state;
  }
}
