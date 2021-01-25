import {
  REGISTER_SUCCESS,
  REGISTER_FAILD,
  LOGIN_SUCCESS,
  LOGIN_FAILD,
  LOAD_User_SUCCESS,
  LOAD_User_FAILD,
  LOGOUT,
  LOAD_ALL_USERS,
  LOAD_ALL_USERS_FAIL,
  EDIT_FAILD,
} from "../action/type";

const initState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  errors: null,
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_ALL_USERS:
    case LOAD_User_SUCCESS:
      return { ...state, user: action.payload, errors: null };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
        errors: null,
      };
    case LOAD_ALL_USERS_FAIL:
    case EDIT_FAILD:
    case LOGIN_FAILD:
    case LOAD_User_FAILD:
    case REGISTER_FAILD:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        errors: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return { user: null, isAuth: false, errors: null };
    default:
      return state;
  }
};
export default AuthReducer;
