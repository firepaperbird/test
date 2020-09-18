import { Action } from "redux";

export const userConstants = {
    REGISTER_REQUEST: "USERS_REGISTER_REQUEST",
    REGISTER_SUCCESS: "USERS_REGISTER_SUCCESS",
    REGISTER_FAILURE: "USERS_REGISTER_FAILURE",
  
    LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
    LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
    LOGIN_FAILURE: "USERS_LOGIN_FAILURE",
  
    LOGOUT: "USERS_LOGOUT",
  
    GETUSER_REQUEST: "GETUSER_REQUEST",
    GETUSER_SUCCESS: "GETUSER_SUCCESS",
    GETUSER_FAILURE: "GETUSER_FAILURE",
};

const user = (state = {}, action: Action) => {
  const { message = "", users = [] } = action;

  switch (action.type) {
    case userConstants.GETUSER_REQUEST:
      return  { ...state, ...action.payload };

    case userConstants.GETUSER_SUCCESS:
      return { isGettingUser: false, users };

    case userConstants.GETUSER_FAILURE:
      return { isGettingUser: false, message };

    default:
      return state;
  }
};

export default user;
