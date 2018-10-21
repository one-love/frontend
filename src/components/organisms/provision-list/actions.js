export const PROVISION_LIST = 'PROVISION_LIST'
export const PROVISION_LIST_SUCCESS = 'PROVISION_LIST_SUCCESS'
export const PROVISION_LIST_FAILURE = 'PROVISION_LIST_FAILURE'
export const PROVISION_LIST_RESET = 'PROVISION_LIST_RESET'


export function requestProvisionList(page = 0) {
  return {
    page,
    type: PROVISION_LIST,
  }
}


export function requestProvisionListReset() {
  return { type: PROVISION_LIST_RESET }
}


export default {
  requestProvisionList,
  requestProvisionListReset,
}
