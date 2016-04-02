import { CLUSTER_SERVICE_ADD } from '../constants';

export default function clusterService(
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
