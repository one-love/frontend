import { CLUSTERS } from '../constants/ActionTypes';

export default function clusters(
  state = { status: 'initial', clusters: [] },
  action
) {
  switch (action.type) {
    case CLUSTERS:
      return {
        clusters: action.payload.clusters,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
