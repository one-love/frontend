import { CLUSTER_SERVICE_REMOVE } from '../constants';

export default function clusterServiceRemove(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case CLUSTER_SERVICE_REMOVE:
      return action.payload;
    default:
      return state;
  }
}
