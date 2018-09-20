import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './actions'


export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        peding: true,
        error: null,
        status: null,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        status: 200,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message,
        status: action.error.response.status,
      }
    default:
      return state
  }
}
