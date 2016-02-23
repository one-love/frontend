import { CLUSTER_DETAIL } from '../../constants/ActionTypes';

export default function cluster(state = { status: 'initial' }, action) {
  switch (action.type) {
    case CLUSTER_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
