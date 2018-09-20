import { takeLatest } from 'redux-saga/effects'

// Actions
import { LOGIN } from 'pages/login/actions'
import { LOGOUT, ME, REFRESH } from 'components/atoms/protected/actions'

// Sagas
import { requestLogin } from 'pages/login/sagas'
import {
  requestLogout,
  requestMe,
  requestRefresh,
} from 'components/atoms/protected/sagas'


export default function* greenSaga() {
  yield takeLatest(LOGIN, requestLogin)
  yield takeLatest(LOGOUT, requestLogout)
  yield takeLatest(ME, requestMe)
  yield takeLatest(REFRESH, requestRefresh)
}
