import { CLUSTER_SERVICE } from '../constants';

export default function clusterService(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case CLUSTER_SERVICE:
      return action.payload;
    default:
      return state;
  }
}
