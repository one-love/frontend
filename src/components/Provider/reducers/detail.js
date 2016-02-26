import { PROVIDER_DETAIL } from '../constants';

export default function providerDetail(state = { status: 'initial' }, action) {
  switch (action.type) {
    case PROVIDER_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
