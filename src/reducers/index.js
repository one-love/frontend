import { combineReducers } from 'redux';
import login from './login';


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

import applicationCreate from './application/create';
import applicationDetail from './application';
import applicationEdit from './application/edit';
import applicationList from './application/list';
import applicationRemove from './application/remove';

const rootReducer = combineReducers({
  login,

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

  applicationCreate,
  applicationDetail,
  applicationEdit,
  applicationList,
  applicationRemove,
});

export default rootReducer;
