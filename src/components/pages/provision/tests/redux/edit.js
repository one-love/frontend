/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quote-props: 0 */

import expect from 'expect';
import actions from '../../actions/edit';
import store from '../../../../../store';
import { PROVISION_EDIT } from '../../constants';


const provisionEditTest = describe('Testing edit of provision', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: PROVISION_EDIT,
      });
  }),
  it('get success state', () => {
    expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          provision: {},
          status: 'success',
        },
        type: PROVISION_EDIT,
      });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: PROVISION_EDIT,
      });
  }),
  it('get error state', () => {
    expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: PROVISION_EDIT,
      });
  });
});

export default provisionEditTest;
