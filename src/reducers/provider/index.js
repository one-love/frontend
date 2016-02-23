import { PROVIDER_DETAIL } from '../../constants/ActionTypes';

export default function provider(state = { status: 'initial' }, action) {
  switch (action.type) {
    case PROVIDER_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
