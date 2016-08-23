/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quote-props: 0 */
import expect from 'expect';
import actions from '../actions/plugin';
import store from '../../../../store';
import { PROVIDER_PLUGINS } from '../constants';


const providerPluginsTest = describe('Testing plugins of provider', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          plugins: [],
          status: 'initial',
        },
        type: PROVIDER_PLUGINS,
      });
  }),
  it('get success state', () => {
    expect(store.dispatch(actions.success({})))
      .toEqual({
        payload: {
          plugins: {},
          status: 'success',
        },
        type: PROVIDER_PLUGINS,
      });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          plugins: [],
          status: 'pending',
        },
        type: PROVIDER_PLUGINS,
      });
  }),
  it('get error state', () => {
    expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: PROVIDER_PLUGINS,
      });
  });
});

export default providerPluginsTest;
