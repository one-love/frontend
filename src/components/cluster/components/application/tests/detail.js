import expect from 'expect';
import actions from '../actions/detail';
import store from '../../../../../store';
import { APPLICATION_DETAIL } from '../constants';


const applicationDetailTest = describe('Testing detail of application', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: APPLICATION_DETAIL,
     })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          application: {},
          status: 'success',
        },
        type: APPLICATION_DETAIL,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: APPLICATION_DETAIL,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: APPLICATION_DETAIL,
     })
  })
});

export default applicationDetailTest;
