import { PROVIDER_LIST } from '../../constants/ActionTypes';

export default function providers(
  state = { status: 'initial', providers: [] },
  action
) {
  switch (action.type) {
    case PROVIDER_LIST:
      return action.payload;
    default:
      return state;
  }
}
