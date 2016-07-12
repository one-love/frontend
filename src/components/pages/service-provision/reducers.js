import { SERVICE_PROVISION } from './constants';


export default function provisionList(
  state = {
    status: 'initial',
    provisions: [],
  },
  action
) {
  switch (action.type) {
    case SERVICE_PROVISION:
      return action.payload;
    default:
      return state;
  }
}
