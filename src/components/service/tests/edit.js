import expect from 'expect';
import actions from '../actions/edit';
import store from '../../../store';
import { SERVICE_EDIT } from '../constants';


const serviceEditTest = describe('Testing edit of service', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: SERVICE_EDIT,
     })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          service: {},
          status: 'success',
        },
        type: SERVICE_EDIT,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: SERVICE_EDIT,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: SERVICE_EDIT,
     })
  })
});

export default serviceEditTest;
