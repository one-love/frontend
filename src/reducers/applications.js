import { APPLICATIONS } from '../constants/ActionTypes';

export default function applicatons(
  state = { status: 'initial', applications: [] },
  action
) {
  switch (action.type) {
    case APPLICATIONS:
      return {
        applications: action.payload.applications,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
