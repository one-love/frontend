import { combineReducers } from 'redux';
import login from './components/pages/login/reducers';
import sidebar from './components/atoms/sidebar/reducers';
import serviceList from './components/pages/service-list/reducers';
import clusterList from './components/pages/cluster-list/reducers';


const reducers = {
  login,
  sidebar,
  serviceList,
  clusterList,
};


const rootReducer = combineReducers(reducers);

export default rootReducer;
