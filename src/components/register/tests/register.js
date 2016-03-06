import expect from 'expect';
import actions from '../actions';
import store from '../../../store';
import { REGISTER } from '../constants.js';

const registerTest = describe('Testing register', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: REGISTER,
      })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          user: {},
          status: 'success',
        },
        type: REGISTER,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: REGISTER,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail({ message: 'ErorR'})))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: REGISTER,
     })
  })
})

export default registerTest;
