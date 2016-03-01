import expect from 'expect';
import actions from '../actions/list';
import store from '../../../../../store';
import { PROVIDER_LIST } from '../constants';


const providerListTest = describe('Testing provider list', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
          providers: [],
        },
        type: PROVIDER_LIST,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
          providers: [],
        },
        type: PROVIDER_LIST,
     })
  }),

   it('get error state', () => {
     expect(store.dispatch(actions.fail('erroR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'erroR'
        },
        type: PROVIDER_LIST,
     })
  })
});

export default providerListTest;
