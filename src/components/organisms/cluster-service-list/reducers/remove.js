import { CLUSTER_SERVICE_REMOVE } from '../constants';


export default function clusterServiceRemove(
  state = { status: 'initial', service: {} },
  action
) {
  switch (action.type) {
    case CLUSTER_SERVICE_REMOVE:
      return {
        service: action.payload.service,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
