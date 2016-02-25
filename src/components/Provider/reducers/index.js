import providerCreate from './create';
import providerEdit from './edit';
import providerDetail from './detail';
import providerList from './list';
import providerRemove from './remove';

const reducers = [
  providerCreate,
  providerDetail,
  providerEdit,
  providerList,
  providerRemove,
];

export default reducers;
