import { PROVIDER_EDIT } from '../constants';

export default function providerEdit(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case PROVIDER_EDIT:
      return action.payload;
    default:
      return state;
  }
}
