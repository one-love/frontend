import { ME_DETAIL } from '../constants';

export default function meDetail(state = { status: 'initial' }, action) {
  switch (action.type) {
    case ME_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
