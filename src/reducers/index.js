import { combineReducers } from 'redux';
import login from './login';
import cluster from './cluster';
import clusters from './clusters';

const rootReducer = combineReducers({
  login,
  cluster,
  clusters,
});

export default rootReducer;
