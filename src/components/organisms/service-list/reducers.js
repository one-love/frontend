import {
  SERVICE_LIST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAILURE,
  SERVICE_LIST_RESET,
} from './actions'


export default function serviceListReducer(state = { }, action) {
  switch (action.type) {
    case SERVICE_LIST:
      return {
        ...state,
        error: null,
        pending: true,
        status: null,
      }
    case SERVICE_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        result: action.result,
        status: 200,
      }
    case SERVICE_LIST_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message,
        pending: false,
        status: action.error.response.status,
      }
    case SERVICE_LIST_RESET:
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
