export const PROVIDER_LIST = 'PROVIDER_LIST'
export const PROVIDER_LIST_SUCCESS = 'PROVIDER_LIST_SUCCESS'
export const PROVIDER_LIST_FAILURE = 'PROVIDER_LIST_FAILURE'
export const PROVIDER_LIST_RESET = 'PROVIDER_LIST_RESET'


export function requestProviderList(page = 0) {
  return {
    page,
    type: PROVIDER_LIST,
  }
}


export function requestProviderListReset() {
  return { type: PROVIDER_LIST_RESET }
}


export default {
  requestProviderList,
  requestProviderListReset,
}
