import expect from 'expect';
import actions from '../actions/edit';
import store from '../../../../../store';
import { PROVIDER_EDIT } from '../constants';


const providerEditTest = describe('Testing edit of provider', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: PROVIDER_EDIT,
     })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          provider: {},
          status: 'success',
        },
        type: PROVIDER_EDIT,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: PROVIDER_EDIT,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: PROVIDER_EDIT,
     })
  })
});

export default providerEditTest;
