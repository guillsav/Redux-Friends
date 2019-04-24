import axiosWithAuth from '../utils/axiosAuth';
import {
  FETCHING_FRIENDS_REQUEST,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE
} from '.';

export const fetchFriends = () => dispatch => {
  dispatch({type: FETCHING_FRIENDS_REQUEST});
  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCHING_FRIENDS_FAILURE, payload: err}));
};
