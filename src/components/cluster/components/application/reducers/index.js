import applicationCreate from './create';
import applicationEdit from './edit';
import applicationDetail from './detail';
import applicationList from './list';
import applicationRemove from './remove';

const reducers = [
  applicationCreate,
  applicationDetail,
  applicationEdit,
  applicationList,
  applicationRemove,
];

export default reducers;
