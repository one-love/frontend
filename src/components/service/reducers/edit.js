import { SERVICE_EDIT } from '../constants';

export default function serviceEdit(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case SERVICE_EDIT:
      return action.payload;
    default:
      return state;
  }
}
