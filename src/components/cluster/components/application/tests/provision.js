import expect from 'expect';
import actions from '../actions/provision';
import store from '../../../../../store';
import { APPLICATION_PROVISION } from '../constants';


const applicationProvisionTest = describe('Testing application list', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: APPLICATION_PROVISION,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: APPLICATION_PROVISION,
     })
  }),

   it('get error state', () => {
     expect(store.dispatch(actions.fail('erroR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'erroR'
        },
        type: APPLICATION_PROVISION,
     })
  })
});

export default applicationProvisionTest;
