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
        isFetching: true,
        deletingFriend: false,
        deletingFriends: false,
        savingFriends: false,
        updatingFriend: false,
        isAuthenticated: true
      };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isFetching: false,
        error: null,
        deletingFriend: false,
        deletingFriends: false,
        loggingIn: false,
        savingFriends: false,
        updatingFriend: false,
        isAuthenticated: true
      };
    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        friends: [],
        deletingFriend: false,
        deletingFriends: false,
        loggingIn: false,
        savingFriends: false,
        updatingFriend: false,
        isAuthenticated: true
      };
    default:
      return state;
  }
};
