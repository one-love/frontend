/* eslint no-undef:  0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quote-props: 0 */

import expect from 'expect';
import actions from '../actions/detail';
import store from '../../../../store';
import { PROVISION_DETAIL } from '../constants';


const provisionDetailTest = describe('Testing detail of provision', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
        .toEqual({
          payload: {
            status: 'initial',
          },
          type: PROVISION_DETAIL,
        });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.begin()))
        .toEqual({
          payload: {
            status: 'pending',
          },
          type: PROVISION_DETAIL,
        });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.fail('ErorR')))
        .toEqual({
          payload: {
            status: 'error',
            error: 'ErorR',
          },
          type: PROVISION_DETAIL,
        });
  }),
  it('get success state', () => {
    expect(store.dispatch(actions.success({})))
        .toEqual({
          payload: {
            status: 'success',
            provision: {},
          },
          type: PROVISION_DETAIL,
        });
  });
});

export default provisionDetailTest;
