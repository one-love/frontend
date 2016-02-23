import { combineReducers } from 'redux';
import login from './login';

import applications from './applications';

import clusterCreate from './cluster/create';
import clusterDetail from './cluster';
import clusterEdit from './cluster/edit';
import clusterList from './cluster/list';
import clusterRemove from './cluster/remove';

import providerCreate from './provider/create';
import providerDetail from './provider';
import providerEdit from './provider/edit';
import providerList from './provider/list';
import providerRemove from './provider/remove';

const rootReducer = combineReducers({
  login,
  applications,

  clusterCreate,
  clusterDetail,
  clusterEdit,
  clusterList,
  clusterRemove,

  providerCreate,
  providerDetail,
  providerEdit,
  providerList,
  providerRemove,
});

export default rootReducer;
