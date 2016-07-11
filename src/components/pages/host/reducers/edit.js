import { HOST_EDIT } from '../constants';

export default function hostEdit(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case HOST_EDIT:
      return action.payload;
    default:
      return state;
  }
}
