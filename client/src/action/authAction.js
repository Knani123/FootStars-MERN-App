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
  ONE_USER,
  ONE_USER_FAIL,
  EDIT_BY_ID_SUCCESS,
  EDIT_BY_ID_FAIL,
  EDIT_ONLY_ID_SUCCESS,
} from "./type";
import axios from "axios";
import setToken from "../setToken";

//register action
export const registerUser = (info) => (dispatch) => {
  axios
    .post("/register", info)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAILD,
        payload: err.response.data.errors,
      });
    });
};

//load user action
export const loadUser = () => (dispatch) => {
  setToken();
  axios
    .get("/login")
    .then((res) =>
      dispatch({
        type: LOAD_User_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOAD_User_FAILD,
        payload: err.response.data.msg,
      })
    );
};
//login User action
export const loginUser = (info) => (dispatch) => {
  axios
    .post("/login", info)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAILD,
        payload: err.response.data.errors,
      });
    });
};

// log Out action
export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

//all user action
export const loadAlluser = () => (dispatch) => {
  axios
    .get("/login/all")
    .then((res) =>
      dispatch({
        type: LOAD_ALL_USERS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOAD_ALL_USERS_FAIL,
        payload: err.data,
      })
    );
};
//all user by id
export const getOneUser = (id) => (dispatch) => {
  axios
    .get(`/login/${id}`)
    .then((res) =>
      dispatch({
        type: ONE_USER,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ONE_USER_FAIL,
        payload: err.data,
      })
    );
};
//edit user
export const editUser = (info) => (dispatch) => {
  axios
    .put("/login", info)
    .then(() => {
      dispatch(loadUser());
    })
    .catch((err) => {
      dispatch({
        type: EDIT_FAILD,
        payload: err.response.data.errors,
      });
    });
};
//edit user by id
export const editByidUser = (id, info) => (dispatch) => {
  axios
    .put(`/login/user/not/${id}`, info)
    .then((res) => {
      dispatch({
        type: EDIT_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_BY_ID_FAIL,
        payload: err.response,
      });
    });
};
//edit user msg by id
export const editByidUserMsg = (id, info) => (dispatch) => {
  axios
    .put(`/login/msg/${id}`, info)
    .then((res) => {
      console.log(res);
      dispatch({
        type: EDIT_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_BY_ID_FAIL,
        payload: err.response,
      });
    });
};
//edit user by id only
export const editOnlyidUser = (id, info) => (dispatch) => {
  axios
    .put(`/login/user/${id}`, info)
    .then((res) => {
      dispatch({
        type: EDIT_ONLY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_BY_ID_FAIL,
        payload: err.response,
      });
    });
};
