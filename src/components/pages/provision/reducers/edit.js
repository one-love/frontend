import { PROVISION_EDIT } from '../constants';

export default function provisionEdit(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case PROVISION_EDIT:
      return action.payload;
    default:
      return state;
  }
}
