import { HOST_LIST } from '../constants';

export default function hostList(
  state = { status: 'initial', hosts: [] },
  action
) {
  switch (action.type) {
    case HOST_LIST:
      return action.payload;
    default:
      return state;
  }
}
