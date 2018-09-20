import {
  AUTH,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  ME,
  ME_SUCCESS,
  ME_FAILURE,
  REFRESH,
  REFRESH_SUCCESS,
  REFRESH_FAILURE,
  REFRESH_RESET,
} from './actions'


export function authReducer(state = { state: false }, action) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        state: action.state,
      }
    default:
      return state
  }
}


export function logoutReducer(state = {}, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        peding: true,
        error: null,
        status: null,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        status: 200,
      }
    case LOGOUT_FAILURE:
      const error = action.error.response.data.msg
      const status = action.error.response.status
      return {
        ...state,
        pending: false,
        error,
        status,
      }
    default:
      return state
  }
}


export function meReducer(state = {}, action) {
  switch (action.type) {
    case ME:
      return {
        ...state,
        peding: true,
        error: null,
        status: null,
      }
    case ME_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        status: 200,
      }
    case ME_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error.response.data.msg,
        status: action.error.response.status,
      }
    default:
      return state
  }
}


export function refreshReducer(state = {}, action) {
  switch (action.type) {
    case REFRESH:
      return {
        ...state,
        peding: true,
        error: null,
        status: null,
      }
    case REFRESH_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        status: 200,
      }
    case REFRESH_FAILURE:
      const error = action.error.response.data.msg
      const status = action.error.response.status
      return {
        ...state,
        pending: false,
        error,
        status,
      }
    case REFRESH_RESET:
      return {
        ...state,
        pending: false,
        error: null,
        status: null,
      }
    default:
      return state
  }
}
