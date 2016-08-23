/* eslint no-undef:  0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quote-props: 0 */

import expect from 'expect';
import actions from '../../../../molecules/cluster/actions/remove';
import store from '../../../../../store';
import { CLUSTER_REMOVE } from '../../../../molecules/cluster/constants';


const clusterRemoveTest = describe('Testing remove of cluster', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: CLUSTER_REMOVE,
      });
  }),
  it('get success state', () => {
    expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          cluster: {},
          status: 'success',
        },
        type: CLUSTER_REMOVE,
      });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: CLUSTER_REMOVE,
      });
  }),
  it('get error state', () => {
    expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: CLUSTER_REMOVE,
      });
  });
});

export default clusterRemoveTest;
