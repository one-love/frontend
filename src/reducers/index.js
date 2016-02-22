import { combineReducers } from 'redux';
import login from './login';
import cluster from './cluster';
import clusters from './clusters';
import applications from './applications';

const rootReducer = combineReducers({
  login,
  cluster,
  clusters,
  applications,
});

export default rootReducer;
