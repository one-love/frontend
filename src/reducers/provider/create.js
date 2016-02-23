import { PROVIDER_CREATE } from '../../constants/ActionTypes';

export default function clusterCreate(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case PROVIDER_CREATE:
      return action.payload;
    default:
      return state;
  }
}
