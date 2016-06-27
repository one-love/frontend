import { SERVICE_LIST } from './constants';

export default function serviceList(
  state = { status: 'initial', services: [] },
  action
) {
  switch (action.type) {
    case SERVICE_LIST:
      return {
        services: action.payload.services,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
