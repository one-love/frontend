import { PROVIDER_REMOVE } from '../constants';

export default function providerRemove(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case PROVIDER_REMOVE:
      return action.payload;
    default:
      return state;
  }
}
