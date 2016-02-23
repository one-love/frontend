import { combineReducers } from 'redux';
import login from './login';
import clusterDetail from './cluster';
import clusterCreate from './cluster/create';
import clusterEdit from './cluster/edit';
import clusterList from './cluster/list';
import clusterRemove from './cluster/remove';
import applications from './applications';

const rootReducer = combineReducers({
  login,
  clusterCreate,
  clusterDetail,
  clusterEdit,
  clusterList,
  clusterRemove,
  applications,
});

export default rootReducer;
