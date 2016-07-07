import { SERVICE_CREATE } from '../constants';

export default function serviceCreate(
  state = { status: 'initial', services: [] },
  action
) {
  switch (action.type) {
    case SERVICE_CREATE:
      return {
        services: action.payload.services,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
