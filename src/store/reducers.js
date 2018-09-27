import { combineReducers } from 'redux'
import {
  authReducer,
  logoutReducer,
  meReducer,
  refreshReducer,
} from 'components/atoms/protected/reducers'
import loginReducer from 'pages/login/reducers'
import errorReducer from 'templates/empty/reducers'
import titleReducer from 'templates/default/reducers'


export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  login: loginReducer,
  logout: logoutReducer,
  me: meReducer,
  refresh: refreshReducer,
  title: titleReducer,
})
