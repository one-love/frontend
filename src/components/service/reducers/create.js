import { SERVICE_CREATE } from '../constants';

export default function serviceCreate(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case SERVICE_CREATE:
      return action.payload;
    default:
      return state;
  }
}
