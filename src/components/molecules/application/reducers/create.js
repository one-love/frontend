import { APPLICATION_CREATE } from '../constants';


export default function applicationCreate(
  state = { status: 'initial', application: {} },
  action
) {
  switch (action.type) {
    case APPLICATION_CREATE:
      return {
        application: action.payload.application,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
