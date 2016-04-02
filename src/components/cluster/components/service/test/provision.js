import expect from 'expect';
import actions from '../actions/provision';
import store from '../../../../../store';
import { PROVISION } from '../constants';


const provisionTest = describe('Testing provision', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: PROVISION,
     })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          task: {},
          status: 'success',
        },
        type: PROVISION,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: PROVISION,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: PROVISION,
     })
  })
});

export default provisionTest;
