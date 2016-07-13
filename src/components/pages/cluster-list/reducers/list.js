import { CLUSTER_LIST } from '../constants';

export default function clusterList(
  state = { status: 'initial', clusters: [] },
  action
) {
  switch (action.type) {
    case CLUSTER_LIST:
      return {
        clusters: action.payload.clusters,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
