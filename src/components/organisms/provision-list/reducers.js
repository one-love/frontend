import {
  PROVISION_LIST,
  PROVISION_LIST_SUCCESS,
  PROVISION_LIST_FAILURE,
  PROVISION_LIST_RESET,
} from './actions'


export default function provisionListReducer(state = { }, action) {
  switch (action.type) {
    case PROVISION_LIST:
      return {
        ...state,
        error: null,
        pending: true,
        status: null,
      }
    case PROVISION_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        result: action.result,
        status: 200,
      }
    case PROVISION_LIST_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message,
        pending: false,
        status: action.error.response.status,
      }
    case PROVISION_LIST_RESET:
      return {
        ...state,
        error: null,
        pending: false,
        status: null,
      }
    default:
      return state
  }
}
