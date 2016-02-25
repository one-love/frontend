import { APPLICATION_LIST } from '../../constants/ActionTypes';

export default function applications(
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
