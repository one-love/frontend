import { call, put } from 'redux-saga/effects'
import ProviderListProvider from './service'
import { PROVIDER_LIST_SUCCESS, PROVIDER_LIST_FAILURE } from './actions'


export default function* providerListSaga(action) {
  try {
    const result = yield call(ProviderListProvider.providerList, action.page)
    yield put({ type: PROVIDER_LIST_SUCCESS, result })
  } catch (error) {
    yield put({ type: PROVIDER_LIST_FAILURE, error })
  }
}
