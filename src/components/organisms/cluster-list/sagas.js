import { call, put } from 'redux-saga/effects'
import ClusterListService from './service'
import { CLUSTER_LIST_SUCCESS, CLUSTER_LIST_FAILURE } from './actions'


export default function* clusterListSaga(action) {
  try {
    const result = yield call(ClusterListService.clusterList, action.page)
    yield put({ type: CLUSTER_LIST_SUCCESS, result })
  } catch (error) {
    yield put({ type: CLUSTER_LIST_FAILURE, error })
  }
}
