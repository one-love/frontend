import expect from 'expect';
import actions from '../actions/detail';
import store from '../../../store';
import { ME_DETAIL } from '../constants';


const meDetailTest = describe('Testing profile', () => {
   it('get initial state', () => {
     expect(store.dispatch(actions.reset()))
      .toEqual({
        payload: {
          status: 'initial',
        },
        type: ME_DETAIL,
     })
  }),
   it('get success state', () => {
     expect(store.dispatch(actions.success({
        "email": "admin@example.com",
        "first_name": "string",
        "id": "string",
        "last_name": "string",
        "roles": {
          "admin": "string",
          "description": "string",
          "name": "string"
        },
        "username": "admin"
    })))
      .toEqual({
        payload:{
          me:{
            "email": "admin@example.com",
            "first_name": "string",
            "id": "string",
            "last_name": "string",
            "roles": {
              "admin": "string",
              "description": "string",
              "name": "string"
            },
            "username": "admin"
          }
        },
        type: ME_DETAIL,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.begin()))
      .toEqual({
        payload: {
          status: 'pending',
        },
        type: ME_DETAIL,
     })
  }),
   it('get pending state', () => {
     expect(store.dispatch(actions.fail('ErorR')))
      .toEqual({
        payload: {
          status: 'error',
          error: 'ErorR',
        },
        type: ME_DETAIL,
     })
  })
});

export default meDetailTest;
