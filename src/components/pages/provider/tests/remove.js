/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quote-props: 0 */
import expect from 'expect';
import actions from '../../../molecules/provider/actions/remove';
import store from '../../../../store';
import { PROVIDER_REMOVE } from '../constants';


const providerRemoveTest = describe('Testing remove of provider', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: PROVIDER_REMOVE,
      });
  }),
  it('get success state', () => {
    expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          provider: {},
          status: 'success',
        },
        type: PROVIDER_REMOVE,
      });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: PROVIDER_REMOVE,
      });
  }),
  it('get error state', () => {
    expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: PROVIDER_REMOVE,
      });
  });
});

export default providerRemoveTest;
