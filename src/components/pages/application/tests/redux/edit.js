/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quote-props: 0 */
import expect from 'expect';
import actions from '../../actions/edit';
import store from '../../../../../store';
import { APPLICATION_EDIT } from '../../constants';


const applicationEditTest = describe('Testing edit of application', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: APPLICATION_EDIT,
      });
  }),
  it('get success state', () => {
    expect(store.dispatch(actions.success({
      'galaxy_role': 'onelove-roles.common',
      'name': 'Joseph',
    })))
    .toEqual({
      payload: {
        application: {
          'galaxy_role': 'onelove-roles.common',
          'name': 'Joseph',
        },
        status: 'success',
      },
      type: APPLICATION_EDIT,
    });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.begin()))
    .toEqual({
      payload: {
        status: 'pending',
      },
      type: APPLICATION_EDIT,
    });
  }),
  it('get error state', () => {
    expect(store.dispatch(actions.fail('ErorR')))
    .toEqual({
      payload: {
        status: 'error',
        error: 'ErorR',
      },
      type: APPLICATION_EDIT,
    });
  });
});

export default applicationEditTest;
