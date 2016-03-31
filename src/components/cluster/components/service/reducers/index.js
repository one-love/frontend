import clusterServiceAdd from './addService';
import clusterServiceRemove from './remove';
import provision from './provision';

const reducers = [
  clusterServiceAdd,
  clusterServiceRemove,
  provision,
];

export default reducers;
