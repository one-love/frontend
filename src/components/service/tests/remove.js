/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
import expect from 'expect';
import actions from '../actions/remove';
import store from '../../../store';
import { SERVICE_REMOVE } from '../constants';


const serviceRemoveTest = describe('Testing remove of service', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: SERVICE_REMOVE,
      });
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          service: {},
          status: 'success',
        },
        type: SERVICE_REMOVE,
      });
   }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: SERVICE_REMOVE,
      });
   }),
   it('get error state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: SERVICE_REMOVE,
      });
   });
});

export default serviceRemoveTest;
