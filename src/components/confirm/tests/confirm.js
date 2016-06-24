/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
import expect from 'expect';
import actions from '../actions';
import store from '../../../store';
import { CONFIRM } from '../constants.js';

const confirmTest = describe('Testing confirm', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: CONFIRM,
      });
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          user: {},
          status: 'success',
        },
        type: CONFIRM,
      });
   }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: CONFIRM,
      });
   }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail({ message: 'ErorR' })))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: CONFIRM,
      });
   });
});

export default confirmTest;
