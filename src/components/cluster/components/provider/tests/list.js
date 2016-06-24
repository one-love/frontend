/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
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
      });
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          providers: {},
          status: 'success',
        },
        type: PROVIDER_LIST,
      });
   }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
          providers: [],
        },
        type: PROVIDER_LIST,
      });
   }),

   it('get error state', () => {
     expect(store.dispatch(actions.fail('erroR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'erroR',
        },
        type: PROVIDER_LIST,
      });
   });
});

export default providerListTest;
