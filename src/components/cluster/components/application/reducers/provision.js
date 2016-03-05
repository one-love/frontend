import { APPLICATION_PROVISION } from '../constants';

export default function applicationProvision(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case APPLICATION_PROVISION:
      return action.payload;
    default:
      return state;
  }
}
