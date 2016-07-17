import { SERVICE_REMOVE } from '../constants';

export default function serviceRemove(
  state = { status: 'initial', service: {} },
  action
) {
  switch (action.type) {
    case SERVICE_REMOVE:
      return {
        service: action.payload.service,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
