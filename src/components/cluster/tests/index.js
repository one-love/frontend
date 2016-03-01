import clusterListTest from './list';
import clusterDetailTest from './detail';
import clusterRemoveTest from './remove';
import clusterEditTest from './edit';
import clusterCreateTest from './create';

import application from '../components/application/tests';
import provider from '../components/provider/tests';

const cluster = {
  clusterDetailTest,
  clusterListTest,
  clusterEditTest,
  clusterCreateTest,
  clusterRemoveTest,
  application,
  provider,
};

export default cluster;
