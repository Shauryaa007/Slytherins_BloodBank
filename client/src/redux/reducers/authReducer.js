import {
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGIN_USER_SUCCESS,
  SET_USER,
} from "../actions/types";

const initalState = {
  loginStatus: false,
  user: null,
  error: false,
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginStatus: true,
        error: false,
      };
    case REGISTER_USER_ERROR:
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loginStatus: false,
        user: null,
        error: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loginStatus: false,
        user: null,
        error: false,
      };
    case SET_USER:
      return {
        ...state,
        loginStatus: true,
        user: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
export default authReducer;
