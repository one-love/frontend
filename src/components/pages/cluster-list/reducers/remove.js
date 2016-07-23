import { CLUSTER_REMOVE } from '../constants';


export default function clusterRemove(
  state = { status: 'initial', cluster: {} },
  action
) {
  switch (action.type) {
    case CLUSTER_REMOVE:
      return {
        cluster: action.payload.cluster,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
