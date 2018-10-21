import {
  CLUSTER_LIST,
  CLUSTER_LIST_SUCCESS,
  CLUSTER_LIST_FAILURE,
  CLUSTER_LIST_RESET,
} from './actions'


export default function clusterListReducer(state = { }, action) {
  switch (action.type) {
    case CLUSTER_LIST:
      return {
        ...state,
        error: null,
        pending: true,
        status: null,
      }
    case CLUSTER_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
        result: action.result,
        status: 200,
      }
    case CLUSTER_LIST_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message,
        pending: false,
        status: action.error.response.status,
      }
    case CLUSTER_LIST_RESET:
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
