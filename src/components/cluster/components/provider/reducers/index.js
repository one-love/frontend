import providerCreate from './create';
import providerEdit from './edit';
import providerDetail from './detail';
import providerList from './list';
import providerRemove from './remove';
import pluginList from './get_plugins';

const reducers = [
  providerCreate,
  providerDetail,
  providerEdit,
  providerList,
  providerRemove,
  pluginList,
];

export default reducers;
