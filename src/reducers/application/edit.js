import { APPLICATION_EDIT } from '../../constants/ActionTypes';

export default function applicationEdit(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case APPLICATION_EDIT:
      return action.payload;
    default:
      return state;
  }
}
