import { createAction, handleActions } from 'redux-actions';
import { fetch } from '../../utils';
import API_URL from '../../constants';

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CLUSTERS = 'GET_CLUSTERS';

// ------------------------------------
// Actions
// ------------------------------------
export const saveToken = createAction(GET_CLUSTERS, json => {
  window.localStorage.OneLoveAuthToken = json.token;
  return json;
});

export const getClusters = (email, password) => {
  return dispatch => {
    fetch(
      `${API_URL}/auth/tokens`,
      {
        email,
        password,
      },
      'post'
    )
      .then(json => {
        dispatch(saveToken(json));
        return json;
      })
      .catch(error => {
        console.log('in catch', error);
      });
  };
};

export const actions = {
  saveToken,
  login,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  LOGIN: (state, { payload }) => payload,
}, 1);
