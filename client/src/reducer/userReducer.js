import {
  ONE_USER,
  ONE_USER_FAIL,
  EDIT_BY_ID_SUCCESS,
  EDIT_ONLY_ID_SUCCESS,
} from "../action/type";
const initState = {};
const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case EDIT_ONLY_ID_SUCCESS:
    case EDIT_BY_ID_SUCCESS:
    case ONE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default UserReducer;
