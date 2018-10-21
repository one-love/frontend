export const USER_LIST = 'USER_LIST'
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS'
export const USER_LIST_FAILURE = 'USER_LIST_FAILURE'


export function requestUserList() {
  return { type: USER_LIST }
}


export default {
  requestUserList,
}
