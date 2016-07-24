import { PROVIDER_PLUGINS } from '../constants';

export default function providerPlugins(
  state = { status: 'initial', plugins: [] },
  action
) {
  switch (action.type) {
    case PROVIDER_PLUGINS:
      return action.payload;
    default:
      return state;
  }
}
