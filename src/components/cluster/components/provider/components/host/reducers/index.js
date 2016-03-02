import hostCreate from './create';
import hostEdit from './edit';
import hostDetail from './detail';
import hostList from './list';
import hostRemove from './remove';

const reducers = [
  hostCreate,
  hostDetail,
  hostEdit,
  hostList,
  hostRemove,
];

export default reducers;
