import { PROVIDER_CREATE } from '../constants';


export default function providerCreate(
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
