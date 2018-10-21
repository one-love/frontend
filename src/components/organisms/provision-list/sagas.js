import { call, put } from 'redux-saga/effects'
import ProvisionListProvision from './service'
import { PROVISION_LIST_SUCCESS, PROVISION_LIST_FAILURE } from './actions'


export default function* provisionListSaga(action) {
  try {
    const result = yield call(ProvisionListProvision.provisionList, action.page)
    yield put({ type: PROVISION_LIST_SUCCESS, result })
  } catch (error) {
    yield put({ type: PROVISION_LIST_FAILURE, error })
  }
}
