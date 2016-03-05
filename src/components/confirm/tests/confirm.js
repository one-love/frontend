import expect from 'expect';
import actions from '../actions';
import store from '../../../store';
import { CONFIRM } from '../constants.js';

const confirmTest = describe('Testing confirm', () => {
  it('get initial state', () => {
    exepct(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: CONFIRM,
      })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: CONFIRM,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: CONFIRM,
     })
  })
})

export default confirmTest;
