import { GET_PLUGINS } from '../constants';

export default function pluginList(
  state = { status: 'initial', plugins: [] },
  action
) {
  switch (action.type) {
    case GET_PLUGINS:
      return action.payload;
    default:
      return state;
  }
}
