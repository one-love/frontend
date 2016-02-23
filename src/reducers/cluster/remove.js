import { CLUSTER_REMOVE } from '../../constants/ActionTypes';

export default function clusterRemove(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case CLUSTER_REMOVE:
      return action.payload;
    default:
      return state;
  }
}
