import { GET_USER_NOW } from "./type";
export const getUserNow = (userNow) => (dispatch) => {
  dispatch({
    type: GET_USER_NOW,
    payload: userNow,
  });
};
export default getUserNow;
