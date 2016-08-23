/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quote-props: 0 */
import expect from 'expect';
import actions from '../../actions/create';
import store from '../../../../../store';
import { CLUSTER_CREATE } from '../../constants';


const clusterCreateTest = describe('Testing create of cluster', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: CLUSTER_CREATE,
      });
  }),
  it('get success state', () => {
    expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          cluster: {},
          status: 'success',
        },
        type: CLUSTER_CREATE,
      });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: CLUSTER_CREATE,
      });
  }),
  it('get error state', () => {
    expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: CLUSTER_CREATE,
      });
  });
});

export default clusterCreateTest;
