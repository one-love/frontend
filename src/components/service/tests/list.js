import expect from 'expect';
import actions from '../actions/list';
import store from '../../../store';
import { SERVICE_LIST } from '../constants';


const serviceListTest = describe('Testing service list', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
          services: [],
        },
        type: SERVICE_LIST,
     })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          services: {},
          status: 'success',
        },
        type: SERVICE_LIST,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
          services: [],
        },
        type: SERVICE_LIST,
     })
  }),

   it('get error state', () => {
     expect(store.dispatch(actions.fail('erroR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'erroR'
        },
        type: SERVICE_LIST,
     })
  })
});

export default serviceListTest;
