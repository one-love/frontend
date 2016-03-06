import expect from 'expect';
import actions from '../actions/edit';
import store from '../../../../../../../store';
import { HOST_EDIT } from '../constants';


const hostEditTest = describe('Testing edit of host', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: HOST_EDIT,
     })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          host: {},
          status: 'success',
        },
        type: HOST_EDIT,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: HOST_EDIT,
     })
  }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: HOST_EDIT,
     })
  })
});

export default hostEditTest;
