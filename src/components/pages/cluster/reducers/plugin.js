import { CLUSTER_PLUGINS } from '../constants';

export default function clusterPlugins(
  state = { status: 'initial', plugins: [] },
  action
) {
  switch (action.type) {
    case CLUSTER_PLUGINS:
      return action.payload;
    default:
      return state;
  }
}
