import { CLUSTER_CREATE } from '../constants';

export default function clusterCreate(
  state = { status: 'initial', clusters: [] },
  action
) {
  switch (action.type) {
    case CLUSTER_CREATE:
      return {
        clusters: action.payload.clusters,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
