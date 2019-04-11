import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions';

import {initialState} from './intialState';

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        error: null,
        deletingFriend: false,
        deletingFriends: false,
        savingFriends: false,
        updatingFriend: false,
        friends: [],
        isAuthenticated: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: null,
        deletingFriend: false,
        deletingFriends: false,
        savingFriends: false,
        updatingFriend: false,
        friends: [],
        isAuthenticated: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
        deletingFriend: false,
        deletingFriends: false,
        savingFriends: false,
        updatingFriend: false,
        friends: [],
        isAuthenticated: false
      };
    default:
      return state;
  }
};
