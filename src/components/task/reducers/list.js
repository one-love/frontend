import { TASK_LIST } from '../constants';

export default function taskList(
  state = {
    status: 'initial',
    tasks: [],
  },
  action
) {
  switch (action.type) {
    case TASK_LIST:
      return action.payload;
    default:
      return state;
  }
}
