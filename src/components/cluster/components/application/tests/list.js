import expect from 'expect';
import actions from '../actions/list';
import store from '../../../../../store';
import { APPLICATION_LIST } from '../constants';


const applicationListTest = describe('Testing application list', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
          applications: [],
        },
        type: APPLICATION_LIST,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
          applications: [],
        },
        type: APPLICATION_LIST,
     })
  }),

   it('get error state', () => {
     expect(store.dispatch(actions.fail('erroR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'erroR'
        },
        type: APPLICATION_LIST,
     })
  })
});

export default applicationListTest;
