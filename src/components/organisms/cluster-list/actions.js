export const CLUSTER_LIST = 'CLUSTER_LIST'
export const CLUSTER_LIST_SUCCESS = 'CLUSTER_LIST_SUCCESS'
export const CLUSTER_LIST_FAILURE = 'CLUSTER_LIST_FAILURE'
export const CLUSTER_LIST_RESET = 'CLUSTER_LIST_RESET'


export function requestClusterList(page = 0) {
  return {
    page,
    type: CLUSTER_LIST,
  }
}


export function requestClusterListReset() {
  return { type: CLUSTER_LIST_RESET }
}


export default {
  requestClusterList,
  requestClusterListReset,
}
