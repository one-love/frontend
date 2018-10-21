import { takeLatest } from 'redux-saga/effects'

// Actions
import { LOGOUT, ME, REFRESH } from 'components/atoms/protected/actions'
import { CLUSTER_LIST } from 'components/organisms/cluster-list/actions'
import { PROVISION_LIST } from 'components/organisms/provision-list/actions'
import { SERVICE_LIST } from 'components/organisms/service-list/actions'
import { LOGIN } from 'pages/login/actions'
import { USER_LIST } from 'pages/user-list/actions'

// Sagas
import {
  logoutSaga,
  meSaga,
  refreshSaga,
} from 'components/atoms/protected/sagas'
import clusterListSaga from 'components/organisms/cluster-list/sagas'
import provisionListSaga from 'components/organisms/provision-list/sagas'
import serviceListSaga from 'components/organisms/service-list/sagas'
import loginSaga from 'pages/login/sagas'
import userListSaga from 'pages/user-list/sagas'


export default function* greenSaga() {
  yield takeLatest(CLUSTER_LIST, clusterListSaga)
  yield takeLatest(LOGIN, loginSaga)
  yield takeLatest(LOGOUT, logoutSaga)
  yield takeLatest(ME, meSaga)
  yield takeLatest(PROVISION_LIST, provisionListSaga)
  yield takeLatest(REFRESH, refreshSaga)
  yield takeLatest(SERVICE_LIST, serviceListSaga)
  yield takeLatest(USER_LIST, userListSaga)
}
