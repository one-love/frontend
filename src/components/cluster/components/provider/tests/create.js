import expect from 'expect';
import actions from '../actions/create';
import store from '../../../../../store';
import { PROVIDER_CREATE } from '../constants';


const providerCreateTest = describe('Testing create of provider', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: PROVIDER_CREATE,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: PROVIDER_CREATE,
     })
  }),
   it('get fail state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: PROVIDER_CREATE,
     })
  })
});

export default providerCreateTest;
