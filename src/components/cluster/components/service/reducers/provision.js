import { PROVISION } from '../constants';

export default function provision(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case PROVISION:
      return action.payload;
    default:
      return state;
  }
}
