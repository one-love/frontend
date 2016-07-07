import { PROVISION_LIST } from './constants';


export default function provisionList(
  state = {
    status: 'initial',
    provisions: [],
  },
  action
) {
  switch (action.type) {
    case PROVISION_LIST:
      return action.payload;
    default:
      return state;
  }
}
