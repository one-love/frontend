import applicationCreate from './create';
import applicationEdit from './edit';
import applicationDetail from './detail';
import applicationList from './list';
import applicationRemove from './remove';
import applicationProvision from './provision';

const reducers = [
  applicationCreate,
  applicationDetail,
  applicationEdit,
  applicationList,
  applicationRemove,
  applicationProvision,
];

export default reducers;
