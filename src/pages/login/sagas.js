import { call, put } from 'redux-saga/effects'
import AuthService from './service'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actions'


export default function* loginSaga(action) {
  try {
    const service = action.service ? action.service : AuthService.login
    const result = yield call(service, action.creds)
    yield put({ type: LOGIN_SUCCESS, result })
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error })
  }
}
