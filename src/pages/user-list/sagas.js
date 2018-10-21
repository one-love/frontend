import { call, put } from 'redux-saga/effects'
import UserListService from './service'
import { USER_LIST_SUCCESS, USER_LIST_FAILURE } from './actions'


export default function* userListSaga() {
  try {
    const result = yield call(UserListService.userList)
    yield put({ type: USER_LIST_SUCCESS, result })
  } catch (error) {
    yield put({ type: USER_LIST_FAILURE, error })
  }
}
