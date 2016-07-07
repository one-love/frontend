import { combineReducers } from 'redux';
import login from './components/pages/login/reducers';
import sidebar from './components/atoms/sidebar/reducers';
import servicesReducers from './components/pages/service-list/reducers';
import clusterList from './components/pages/cluster-list/reducers';
import provisionList from './components/pages/provision-list/reducers';
import applicationList from './components/pages/application-list/reducers';
import clusterReducers from './components/pages/cluster/reducers';
import serviceReducers from './components/pages/service/reducers';
import provisionReducers from './components/pages/provision/reducers';


const reducers = {
  login,
  sidebar,
  clusterList,
  applicationList,
  provisionList,
};

clusterReducers.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

serviceReducers.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

servicesReducers.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

provisionReducers.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});


const rootReducer = combineReducers(reducers);

export default rootReducer;
