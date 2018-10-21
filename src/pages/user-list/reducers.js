import {
  USER_LIST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
} from './actions'


export default function userListReducer(state = {}, action) {
  switch (action.type) {
    case USER_LIST:
      return {
        ...state,
        peding: true,
        error: null,
        status: null,
      }
    case USER_LIST_SUCCESS:
      return {
        ...state,
        data: action.result,
        error: null,
        pending: false,
        status: 200,
      }
    case USER_LIST_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message,
        status: action.error.response.status,
      }
    default:
      return state
  }
}
