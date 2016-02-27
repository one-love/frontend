import React from 'react';
import expect from 'expect';
import actions from '../actions/list';
import store from '../../../store';
import { CLUSTER_LIST } from '../constants';


describe('Testing cluster list', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
          clusters: [],
        },
        type: CLUSTER_LIST,
     })
  })
});
