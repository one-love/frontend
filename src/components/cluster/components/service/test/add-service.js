import expect from 'expect';
import actions from '../actions/add-service';
import store from '../../../../../store';
import { CLUSTER_SERVICE_ADD } from '../constants';


const clusterServiceAddTest = describe('Testing adding service to cluster', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: CLUSTER_SERVICE_ADD,
     })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          service: {},
          status: 'success',
        },
        type: CLUSTER_SERVICE_ADD,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: CLUSTER_SERVICE_ADD,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: CLUSTER_SERVICE_ADD,
     })
  })
});

export default clusterServiceAddTest;
