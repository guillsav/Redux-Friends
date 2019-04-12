import {
  FETCHING_FRIENDS_REQUEST,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE
} from '../actions';

import {initialState} from './intialState';

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS_REQUEST:
      return {
        ...state,
        friends: [],
        isFetching: true,
        error: null,
        isAuthenticated: true,
        logingOut: false
      };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isFetching: false,
        error: null,
        isAuthenticated: true,
        logingOut: false
      };
    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        friends: [],
        isAuthenticated: true,
        logingOut: false
      };
    default:
      return state;
  }
};
