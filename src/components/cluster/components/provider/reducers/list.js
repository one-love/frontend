import { PROVIDER_LIST } from '../constants';

export default function providerList(
  state = { status: 'initial', providers: [] },
  action
) {
  switch (action.type) {
    case PROVIDER_LIST:
      return action.payload;
    default:
      return state;
  }
}
