import { combineReducers } from 'redux';
import login from './components/pages/login/reducers';
import sidebar from './components/atoms/sidebar/reducers';
import serviceList from './components/pages/service-list/reducers';


const reducers = {
  login,
  sidebar,
  serviceList,
};


const rootReducer = combineReducers(reducers);

export default rootReducer;
