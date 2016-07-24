import { HOST_CREATE } from '../constants';


export default function hostCreate(
  state = { status: 'initial', host: {} },
  action
) {
  switch (action.type) {
    case HOST_CREATE:
      return {
        host: action.payload.host,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
