import { CLUSTER_CREATE } from '../constants';

export default function clusterCreate(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case CLUSTER_CREATE:
      return action.payload;
    default:
      return state;
  }
}
