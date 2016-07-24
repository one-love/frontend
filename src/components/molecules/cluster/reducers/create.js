import { CLUSTER_CREATE } from '../constants';

export default function clusterCreate(
  state = { status: 'initial', cluster: {} },
  action
) {
  switch (action.type) {
    case CLUSTER_CREATE:
      return {
        cluster: action.payload.cluster,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
