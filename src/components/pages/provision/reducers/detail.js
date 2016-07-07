import { PROVISION_DETAIL } from '../constants';

export default function provisionDetail(state = { status: 'initial' }, action) {
  switch (action.type) {
    case PROVISION_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
