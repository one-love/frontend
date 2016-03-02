import expect from 'expect';
import actions from '../actions/list';
import store from '../../../../../../../store';
import { HOST_LIST } from '../constants';


const hostListTest = describe('Testing host list', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
          hosts: [],
        },
        type: HOST_LIST,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
          hosts: [],
        },
        type: HOST_LIST,
     })
  }),

   it('get error state', () => {
     expect(store.dispatch(actions.fail('erroR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'erroR'
        },
        type: HOST_LIST,
     })
  })
});

export default hostListTest;
