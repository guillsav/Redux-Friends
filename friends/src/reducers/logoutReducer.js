import {initialState} from './intialState';
import {LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE} from '../actions/types';

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        error: null,
        isAuthenticated: true,
        logingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        error: null,
        loggingIn: false,
        isAuthenticated: false,
        logingOut: false
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: true,
        logingOut: false
      };
    default:
      return state;
  }
};
