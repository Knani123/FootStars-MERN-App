import { GET_USER_NOW } from "../action/type";
const initState = {};
const UserNow = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_NOW:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default UserNow;
