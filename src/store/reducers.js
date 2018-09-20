import { combineReducers } from 'redux'
import errorReducer from 'templates/empty/reducers'
import loginReducer from 'pages/login/reducers'
import {
  authReducer,
  logoutReducer,
  meReducer,
  refreshReducer,
} from 'components/atoms/protected/reducers'


export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  login: loginReducer,
  logout: logoutReducer,
  me: meReducer,
  refresh: refreshReducer,
})
