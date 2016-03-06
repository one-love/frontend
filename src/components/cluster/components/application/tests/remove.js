import expect from 'expect';
import actions from '../actions/remove';
import store from '../../../../../store';
import { APPLICATION_REMOVE } from '../constants';


const applicationRemoveTest = describe('Testing remove of application', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: APPLICATION_REMOVE,
     })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          application: {},
          status: 'success',
        },
        type: APPLICATION_REMOVE,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: APPLICATION_REMOVE,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: APPLICATION_REMOVE,
     })
  })
});

export default applicationRemoveTest;
