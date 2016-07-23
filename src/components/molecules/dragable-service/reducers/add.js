import { CLUSTER_SERVICE_ADD } from '../constants';

export default function clusterServiceAdd(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case CLUSTER_SERVICE_ADD:
      return action.payload;
    default:
      return state;
  }
}
