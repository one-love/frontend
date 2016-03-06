import expect from 'expect';
import actions from '../actions';
import store from '../../../store';
import { LOGIN } from '../constants';

const loginTest = describe('Testing login', () => {
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: LOGIN,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail({ message: 'ErorR'})))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: LOGIN,
     })
  })
});

export default loginTest;
