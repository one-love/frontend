import clusterListTest from './list';
import clusterDetailTest from './detail';
import clusterRemoveTest from './remove';
import clusterEditTest from './edit';
import clusterCreateTest from './create';

import provider from '../components/provider/tests';
import clusterService from '../components/service/test';

const cluster = {
  clusterDetailTest,
  clusterListTest,
  clusterEditTest,
  clusterCreateTest,
  clusterRemoveTest,
  provider,
  clusterService,
};

export default cluster;
