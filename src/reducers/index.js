import { combineReducers } from 'redux';
import login from './login';
import cluster from './cluster';
import clusterCreate from './cluster-create';
import clusterEdit from './cluster-edit';
import clusters from './clusters';
import applications from './applications';

const rootReducer = combineReducers({
  login,
  cluster,
  clusters,
  clusterCreate,
  clusterEdit,
  applications,
});

export default rootReducer;
