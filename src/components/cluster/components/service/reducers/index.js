import clusterServiceAdd from './add-service';
import clusterServiceRemove from './remove';
import provision from './provision';

const reducers = [
  clusterServiceAdd,
  clusterServiceRemove,
  provision,
];

export default reducers;
