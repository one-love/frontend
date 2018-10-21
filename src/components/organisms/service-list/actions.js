export const SERVICE_LIST = 'SERVICE_LIST'
export const SERVICE_LIST_SUCCESS = 'SERVICE_LIST_SUCCESS'
export const SERVICE_LIST_FAILURE = 'SERVICE_LIST_FAILURE'
export const SERVICE_LIST_RESET = 'SERVICE_LIST_RESET'


export function requestServiceList(page = 0) {
  return {
    page,
    type: SERVICE_LIST,
  }
}


export function requestServiceListReset() {
  return { type: SERVICE_LIST_RESET }
}


export default {
  requestServiceList,
  requestServiceListReset,
}
