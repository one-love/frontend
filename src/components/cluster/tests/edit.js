import expect from 'expect';
import actions from '../actions/edit';
import store from '../../../store';
import { CLUSTER_EDIT } from '../constants';


const clusterEditTest = describe('Testing edit of cluster', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: CLUSTER_EDIT,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: CLUSTER_EDIT,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: CLUSTER_EDIT,
     })
  })
});

export default clusterEditTest;
