import { combineReducers } from 'redux';
import login from './components/auth/reducers';
import applicationReducer from './components/service/components/application/reducers';
import clusterReducer from './components/cluster/reducers';
import serviceReducer from './components/service/reducers';
import provisionReducer from './components/provision/reducers';
import hostReducer from './components/cluster/components/provider/components/host/reducers';
import providerReducer from './components/cluster/components/provider/reducers';
import settingsReducer from './components/layout/reducers';
import register from './components/register/reducers';
import confirm from './components/confirm/reducers';
import clusterServiceReducer from './components/cluster/components/service/reducers/';

const reducers = {
  confirm,
  login,
  register,
};

applicationReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

provisionReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

clusterReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

serviceReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

hostReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

providerReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

clusterServiceReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

settingsReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});


const rootReducer = combineReducers(reducers);

export default rootReducer;
