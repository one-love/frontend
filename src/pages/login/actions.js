export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export function requestLogin(creds, service = undefined) {
  const action = {
    type: LOGIN,
    creds,
  }
  if (service !== undefined) { action.service = service }
  return action
}


export default {
  requestLogin,
}
