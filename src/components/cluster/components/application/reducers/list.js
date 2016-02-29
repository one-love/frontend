import { APPLICATION_LIST } from '../constants';

export default function applicationList(
  state = { status: 'initial', applications: [] },
  action
) {
  switch (action.type) {
    case APPLICATION_LIST:
      return action.payload;
    default:
      return state;
  }
}
