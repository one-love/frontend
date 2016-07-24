import { SERVICE_CREATE } from '../constants';

export default function serviceCreate(
  state = { status: 'initial', service: {} },
  action
) {
  switch (action.type) {
    case SERVICE_CREATE:
      return {
        service: action.payload.service,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
