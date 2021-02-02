import axios from "axios";

import {
  GET_MATCH,
  GET_MATCH_FAIL,
  ADD_MATCH,
  ADD_MATCH_FAIL,
  EDIT_MATCH,
  EDIT_MATCH_FAIL,
  EDIT_PARTI,
  EDIT_PARTI_FAIL,
  GET_MYMATCH,
  GET_MYMATCH_FAIL,
  DELETE_MYMATCH_FAIL,
} from "./type";
export const getMatchs = () => (dispatch) => {
  axios
    .get("/match")
    .then((res) =>
      dispatch({
        type: GET_MATCH,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_MATCH_FAIL,
        payload: err.response.data,
      })
    );
};
//get my match
export const getMyMatchs = () => (dispatch) => {
  axios
    .get("/match/myMatch")
    .then((res) => {
      dispatch({
        type: GET_MYMATCH,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_MYMATCH_FAIL,
        payload: err.response.data,
      })
    );
};
export const addMatch = (info) => (dispatch) => {
  axios
    .post("/match", info)
    .then((res) => {
      dispatch({
        type: ADD_MATCH,
        payload: res.data,
      });
    })
    .catch((err) => {
      err.response
        ? dispatch({
            type: ADD_MATCH_FAIL,
            payload: err.response.data.errors,
          })
        : dispatch({
            type: ADD_MATCH_FAIL,
            payload: [{ msg: "No error" }],
          });
    });
};

export const editMatch = (id, info) => (dispatch) => {
  axios
    .put(`/match/${id}`, info)
    .then((res) => {
      dispatch({
        type: EDIT_MATCH,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: EDIT_MATCH_FAIL,
        payload: err.response.data,
      })
    );
};
export const removeParti = (id, info) => (dispatch) => {
  axios
    .put(`/match/parti/${id}`, info)
    .then((res) => {
      dispatch({
        type: EDIT_PARTI,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: EDIT_PARTI_FAIL,
        payload: err.response.data,
      })
    );
};

//delete my match
export const deleteMyMatchs = () => (dispatch) => {
  axios
    .delete("/match/myMatch")
    .then(() => {
      dispatch(getMyMatchs());
    })
    .catch((err) =>
      dispatch({
        type: DELETE_MYMATCH_FAIL,
        payload: err.response.data,
      })
    );
};
//delete match by id
export const deleteMatch = (id) => (dispatch) => {
  axios.delete(`/match/${id}`).then(() => {
    dispatch(getMatchs());
  });
};
//delete match by id
export const updateMatch = (id, info) => (dispatch) => {
  console.log(info);
  axios.put(`/match/admin/${id}`, info).then(() => {
    dispatch(getMatchs());
  });
};
