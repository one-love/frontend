import serviceList from './list';
import serviceCreate from './create';
import serviceDetail from './detail';
import serviceRemove from './remove';

const reducers = [
  serviceCreate,
  serviceDetail,
  serviceList,
  serviceRemove,
];

export default reducers;
