/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quote-props: 0 */

import expect from 'expect';
import actions from '../../actions/edit';
import store from '../../../../../store';
import { CLUSTER_EDIT } from '../../constants';


const clusterEditTest = describe('Testing edit of cluster', () => {
  it('get initial state', () => {
    expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: CLUSTER_EDIT,
      });
  }),
  it('get success state', () => {
    expect(store.dispatch(actions.success({
      'id': '579226dc168b3805106b00ea',
      'name': 'Tammy',
      'providers': [
        {
          'hosts': [
            {
              'hostname': 'target.vagrant',
              'ip': '192.168.33.34',
            },
          ],
          'name': 'Abigail',
          'type': 'SSH',
        },
      ],
      'roles': [
        {
          'admin': null,
          'description': 'Administrator',
          'name': 'admin',
        },
      ],
      'services': [
        {
          'applications': [
            {
              'galaxy_role': 'onelove-roles.common',
              'name': 'Joseph',
            },
          ],
          'id': '579226dc168b3805106b00e9',
          'name': 'Megan',
          'user': {
            'email': 'admin@example.com',
            'first_name': null,
            'id': '579226db168b3805106b00e7',
            'last_name': null,
            'roles': [
              {
                'admin': null,
                'description': 'Administrator',
                'name': 'admin',
              },
            ],
            'username': 'admin',
          },
        },
      ],
      'username': 'vagrant',
    })))
      .toEqual({
        payload: {
          cluster: {
            'id': '579226dc168b3805106b00ea',
            'name': 'Tammy',
            'providers': [
              {
                'hosts': [
                  {
                    'hostname': 'target.vagrant',
                    'ip': '192.168.33.34',
                  },
                ],
                'name': 'Abigail',
                'type': 'SSH',
              },
            ],
            'roles': [
              {
                'admin': null,
                'description': 'Administrator',
                'name': 'admin',
              },
            ],
            'services': [
              {
                'applications': [
                  {
                    'galaxy_role': 'onelove-roles.common',
                    'name': 'Joseph',
                  },
                ],
                'id': '579226dc168b3805106b00e9',
                'name': 'Megan',
                'user': {
                  'email': 'admin@example.com',
                  'first_name': null,
                  'id': '579226db168b3805106b00e7',
                  'last_name': null,
                  'roles': [
                    {
                      'admin': null,
                      'description': 'Administrator',
                      'name': 'admin',
                    },
                  ],
                  'username': 'admin',
                },
              },
            ],
            'username': 'vagrant',
          },
          status: 'success',
        },
        type: CLUSTER_EDIT,
      });
  }),
  it('get pending state', () => {
    expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: CLUSTER_EDIT,
      });
  }),
  it('get error state', () => {
    expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: CLUSTER_EDIT,
      });
  });
});

export default clusterEditTest;
