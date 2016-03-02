import { HOST_CREATE } from '../constants';

export default function hostCreate(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case HOST_CREATE:
      return action.payload;
    default:
      return state;
  }
}
