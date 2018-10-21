import { call, put } from 'redux-saga/effects'
import ServiceListService from './service'
import { SERVICE_LIST_SUCCESS, SERVICE_LIST_FAILURE } from './actions'


export default function* serviceListSaga(action) {
  try {
    const result = yield call(ServiceListService.serviceList, action.page)
    yield put({ type: SERVICE_LIST_SUCCESS, result })
  } catch (error) {
    yield put({ type: SERVICE_LIST_FAILURE, error })
  }
}
