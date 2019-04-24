import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions';

import {initialState} from './intialState';

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        error: null,
        isAuthenticated: false,
        logingOut: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: null,
        isAuthenticated: true,
        logingOut: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
        isAuthenticated: false,
        logingOut: false
      };
    default:
      return state;
  }
};
