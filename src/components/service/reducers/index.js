import serviceList from './list';
import serviceCreate from './create';
import serviceDetail from './detail';
import serviceRemove from './remove';
import serviceEdit from './edit';

const reducers = [
  serviceCreate,
  serviceDetail,
  serviceList,
  serviceRemove,
  serviceEdit,
];

export default reducers;
