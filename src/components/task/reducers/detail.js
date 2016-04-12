import { TASK_DETAIL } from '../constants';

export default function taskDetail(
  state = { status: 'initial' },
  action
) {
  switch (action.type) {
    case TASK_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
