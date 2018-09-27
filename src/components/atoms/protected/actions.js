export const AUTH = 'AUTH'

export const LOGOUT = 'LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const ME = 'ME'
export const ME_SUCCESS = 'ME_SUCCESS'
export const ME_FAILURE = 'ME_FAILURE'

export const REFRESH = 'REFRESH'
export const REFRESH_SUCCESS = 'REFRESH_SUCCESS'
export const REFRESH_FAILURE = 'REFRESH_FAILURE'
export const REFRESH_RESET = 'REFRESH_RESET'


export function requestMe(service = undefined) {
  const action = { type: ME }
  if (service !== undefined) { action.service = service }
  return action
}


export function requestRefresh(service = undefined) {
  const action = { type: REFRESH }
  if (service !== undefined) { action.service = service }
  return action
}


export function requestRefreshReset(service = undefined) {
  const action = { type: REFRESH_RESET }
  if (service !== undefined) { action.service = service }
  return action
}


export function auth(state, service = undefined) {
  const action = {
    state,
    type: AUTH,
  }
  if (service !== undefined) { action.service = service }
  return action
}


export function requestLogout(service = undefined) {
  const action = { type: LOGOUT }
  if (service !== undefined) { action.service = service }
  return action
}


export default {
  auth,
  requestLogout,
  requestMe,
  requestRefresh,
  requestRefreshReset,
}
