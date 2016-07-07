import { CLUSTER_EDIT } from '../constants';

export default function clusterEdit(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case CLUSTER_EDIT:
      return action.payload;
    default:
      return state;
  }
}
