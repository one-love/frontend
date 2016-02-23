import { PROVIDER_EDIT } from '../../constants/ActionTypes';

export default function clusterEdit(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case PROVIDER_EDIT:
      return action.payload;
    default:
      return state;
  }
}
