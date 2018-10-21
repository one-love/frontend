import { combineReducers } from 'redux'
import {
  authReducer,
  logoutReducer,
  meReducer,
  refreshReducer,
} from 'components/atoms/protected/reducers'
import clusterListReducer from 'components/organisms/cluster-list/reducers'
import provisionListReducer from 'components/organisms/provision-list/reducers'
import serviceListReducer from 'components/organisms/service-list/reducers'
import loginReducer from 'pages/login/reducers'
import userListReducer from 'pages/user-list/reducers'
import errorReducer from 'templates/empty/reducers'
import titleReducer from 'templates/default/reducers'


export default combineReducers({
  auth: authReducer,
  clusterList: clusterListReducer,
  error: errorReducer,
  login: loginReducer,
  logout: logoutReducer,
  me: meReducer,
  provisionList: provisionListReducer,
  refresh: refreshReducer,
  serviceList: serviceListReducer,
  title: titleReducer,
  userList: userListReducer,
})
