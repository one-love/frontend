import { takeLatest } from 'redux-saga/effects'

// Actions
import { LOGOUT, ME, REFRESH } from 'components/atoms/protected/actions'
import { LOGIN } from 'pages/login/actions'
import { USER_LIST } from 'pages/user-list/actions'

// Sagas
import {
  logoutSaga,
  meSaga,
  refreshSaga,
} from 'components/atoms/protected/sagas'
import loginSaga from 'pages/login/sagas'
import userListSaga from 'pages/user-list/sagas'


export default function* greenSaga() {
  yield takeLatest(LOGIN, loginSaga)
  yield takeLatest(LOGOUT, logoutSaga)
  yield takeLatest(ME, meSaga)
  yield takeLatest(REFRESH, refreshSaga)
  yield takeLatest(USER_LIST, userListSaga)
}
