import {LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE} from './types';

export const logOutUser = () => dispatch => {
  dispatch({type: LOGOUT_REQUEST});

  localStorage
    .removeItem('token')
    .then(() => dispatch({type: LOGOUT_SUCCESS}))
    .catch(err => dispatch({type: LOGOUT_FAILURE, payload: err}));
};
