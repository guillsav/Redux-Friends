import {
  FETCHING_FRIENDS_REQUEST,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE
} from '../actions';

const initialState = {
  friends: [],
  isFetching: false,
  error: ''
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        friends: ''
      };
    default:
      return state;
  }
};
