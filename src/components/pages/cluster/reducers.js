import { CLUSTER_DETAIL } from './constants';

export default function clusterDetail(state = { status: 'initial' }, action) {
  switch (action.type) {
    case CLUSTER_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
