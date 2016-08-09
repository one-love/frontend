/* eslint no-undef:  0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quote-props: 0 */

import expect from 'expect';
import actions from './actions';
import store from '../../../store';
import { PROVISION_LIST } from './constants';


const provisionListTest = describe('Testing list of provision', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          provisions: [],
          status: 'initial',
        },
        type: PROVISION_LIST,
      });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          provisions: [],
          status: 'pending',
        },
        type: PROVISION_LIST,
      });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: PROVISION_LIST,
      });
  }),
  it('get success state', () => {
    expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          status: 'success',
          provisions: {},
        },
        type: PROVISION_LIST,
      });
  });
});

export default provisionListTest;
