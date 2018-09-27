import { call, put } from 'redux-saga/effects'
import ProtectedService from './service'
import {
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  ME_SUCCESS,
  ME_FAILURE,
  REFRESH_SUCCESS,
  REFRESH_FAILURE,
} from './actions'


export function* logoutSaga(action) {
  try {
    const service = action.service ? action.service : ProtectedService.logout
    const result = yield call(service)
    yield put({ type: LOGOUT_SUCCESS, result })
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, error })
  }
}


export function* meSaga(action) {
  try {
    const service = action.service ? action.service : ProtectedService.me
    const result = yield call(service)
    yield put({ type: ME_SUCCESS, result })
  } catch (error) {
    yield put({ type: ME_FAILURE, error })
  }
}


export function* refreshSaga(action) {
  try {
    const service = action.service ? action.service : ProtectedService.refresh
    const result = yield call(service)
    yield put({ type: REFRESH_SUCCESS, result })
  } catch (error) {
    yield put({ type: REFRESH_FAILURE, error })
  }
}
