import { SHOWIT } from "./type";
export const notif = (not) => (dispatch) => {
  dispatch({
    type: SHOWIT,
    payload: not,
  });
};
export default notif;
