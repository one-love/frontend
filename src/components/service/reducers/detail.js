import { SERVICE_DETAIL } from '../constants';

export default function serviceDetail(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case SERVICE_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
