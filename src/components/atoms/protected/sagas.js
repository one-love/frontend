import { call, put } from 'redux-saga/effects'
import service from './service'
import {
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  ME_SUCCESS,
  ME_FAILURE,
  REFRESH_SUCCESS,
  REFRESH_FAILURE,
} from './actions'


export function* requestLogout() {
  try {
    const result = yield call(service.logout)
    yield put({ type: LOGOUT_SUCCESS, result })
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, error })
  }
}


export function* requestMe() {
  try {
    const result = yield call(service.me)
    yield put({ type: ME_SUCCESS, result })
  } catch (error) {
    yield put({ type: ME_FAILURE, error })
  }
}


export function* requestRefresh() {
  try {
    const result = yield call(service.refresh)
    yield put({ type: REFRESH_SUCCESS, result })
  } catch (error) {
    yield put({ type: REFRESH_FAILURE, error })
  }
}
