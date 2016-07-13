import { combineReducers } from 'redux';
import login from './components/pages/login/reducers';
import sidebar from './components/atoms/sidebar/reducers';
import application from './components/pages/application/reducers';
import applicationList from './components/pages/application-list/reducers';
import cluster from './components/pages/cluster/reducers';
import clusterList from './components/pages/cluster-list/reducers';
import host from './components/pages/host/reducers';
import provider from './components/pages/provider/reducers';
import provision from './components/pages/provision/reducers';
import provisionList from './components/pages/provision-list/reducers';
import service from './components/pages/service/reducers';
import serviceList from './components/pages/service-list/reducers';
import serviceProvision from './components/pages/service-provision/reducers';


const reducers = {
  login,
  sidebar,
  clusterList,
  applicationList,
  provisionList,
  serviceProvision,
};

cluster.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

clusterList.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

service.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

serviceList.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

provision.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

provider.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

host.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

application.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});


const rootReducer = combineReducers(reducers);

export default rootReducer;
