import { combineReducers } from 'redux';
import addCluster from './components/molecules/cluster/reducers';
import addClusterService from './components/molecules/dragable-service/reducers';
import addHost from './components/molecules/host/reducers';
import addProvider from './components/molecules/provider/reducers';
import addService from './components/molecules/service/reducers';
import addServiceApplication from './components/molecules/application/reducers';
import application from './components/pages/application/reducers';
import applicationList from './components/organisms/application-list/reducers';
import cluster from './components/pages/cluster/reducers';
import clusterList from './components/pages/cluster-list/reducers';
import clusterServiceRemove from './components/organisms/cluster-service-list/reducers';
import host from './components/pages/host/reducers';
import { backend, login } from './components/pages/login/reducers';
import provider from './components/pages/provider/reducers';
import provision from './components/pages/provision/reducers';
import provisionList from './components/pages/provision-list/reducers';
import service from './components/pages/service/reducers';
import serviceList from './components/pages/service-list/reducers';
import serviceProvision from './components/pages/service-provision/reducers';
import settings from './components/layouts/layout/reducers';


const reducers = {
  backend,
  login,
  clusterList,
  provisionList,
  serviceProvision,
};

addCluster.forEach(reducer => { reducers[reducer.name] = reducer; });
addClusterService.forEach(reducer => { reducers[reducer.name] = reducer; });
addHost.forEach(reducer => { reducers[reducer.name] = reducer; });
addProvider.forEach(reducer => { reducers[reducer.name] = reducer; });
addService.forEach(reducer => { reducers[reducer.name] = reducer; });
addServiceApplication.forEach(reducer => { reducers[reducer.name] = reducer; });
application.forEach(reducer => { reducers[reducer.name] = reducer; });
applicationList.forEach(reducer => { reducers[reducer.name] = reducer; });
cluster.forEach(reducer => { reducers[reducer.name] = reducer; });
clusterList.forEach(reducer => { reducers[reducer.name] = reducer; });
clusterServiceRemove.forEach(reducer => { reducers[reducer.name] = reducer; });
host.forEach(reducer => { reducers[reducer.name] = reducer; });
provider.forEach(reducer => { reducers[reducer.name] = reducer; });
provision.forEach(reducer => { reducers[reducer.name] = reducer; });
service.forEach(reducer => { reducers[reducer.name] = reducer; });
serviceList.forEach(reducer => { reducers[reducer.name] = reducer; });
settings.forEach(reducer => { reducers[reducer.name] = reducer; });


const rootReducer = combineReducers(reducers);

export default rootReducer;
