import {
  PROVIDER_LIST,
  PROVIDER_LIST_SUCCESS,
  PROVIDER_LIST_FAILURE,
  PROVIDER_LIST_RESET,
} from './actions'


export default function providerListReducer(state = { }, action) {
  switch (action.type) {
    case PROVIDER_LIST:
      return {
        ...state,
        error: null,
        pending: true,
        status: null,
      }
    case PROVIDER_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        result: action.result,
        status: 200,
      }
    case PROVIDER_LIST_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message,
        pending: false,
        status: action.error.response.status,
      }
    case PROVIDER_LIST_RESET:
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
