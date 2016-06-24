/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
import expect from 'expect';
import actions from '../actions/list';
import store from '../../../store';
import { CLUSTER_LIST } from '../constants';


const clusterListTest = describe('Testing cluster list', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
          clusters: [],
        },
        type: CLUSTER_LIST,
      });
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          clusters: {},
          status: 'success',
        },
        type: CLUSTER_LIST,
      });
   }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
          clusters: [],
        },
        type: CLUSTER_LIST,
      });
   }),

   it('get error state', () => {
     expect(store.dispatch(actions.fail('erroR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'erroR',
        },
        type: CLUSTER_LIST,
      });
   });
});

export default clusterListTest;
