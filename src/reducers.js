import { combineReducers } from 'redux';
import login from './components/Auth/reducers';
import applicationReducer from './components/Application/reducers';
import clusterReducer from './components/Cluster/reducers';
import providerReducer from './components/Provider/reducers';


const reducers = {
  login,
};

applicationReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

clusterReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});

providerReducer.map(reducer => {
  reducers[reducer.name] = reducer;
  return undefined;
});


const rootReducer = combineReducers(reducers);

export default rootReducer;
