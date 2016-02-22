import { CLUSTERS } from '../constants/ActionTypes';

export default function clusters(state = [], action) {
  switch (action.type) {
    case CLUSTERS:
      return action.payload;
    default:
      return state;
  }
}
