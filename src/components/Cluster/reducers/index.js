import clusterCreate from './create';
import clusterEdit from './edit';
import clusterDetail from './detail';
import clusterList from './list';
import clusterRemove from './remove';

const reducers = [
  clusterCreate,
  clusterDetail,
  clusterEdit,
  clusterList,
  clusterRemove,
];

export default reducers;
