import { SERVICE_REMOVE } from '../constants';

export default function serviceRemove(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case SERVICE_REMOVE:
      return action.payload;
    default:
      return state;
  }
}
