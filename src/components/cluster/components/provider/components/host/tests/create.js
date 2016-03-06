import expect from 'expect';
import actions from '../actions/create';
import store from '../../../../../../../store';
import { HOST_CREATE } from '../constants';


const hostCreateTest = describe('Testing create of host', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: HOST_CREATE,
     })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          host: {},
          status: 'success',
        },
        type: HOST_CREATE,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: HOST_CREATE,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: HOST_CREATE,
     })
  })
});

export default hostCreateTest;
