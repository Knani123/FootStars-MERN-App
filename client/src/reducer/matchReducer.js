import {
  GET_MATCH,
  ADD_MATCH,
  EDIT_MATCH,
  EDIT_PARTI,
  ADD_MATCH_FAIL,
  GET_MYMATCH,
} from "../action/type";
const initState = [];

const MatchReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MATCH:
    case GET_MYMATCH:
      return action.payload;
    case EDIT_MATCH:
    case EDIT_PARTI:
    case ADD_MATCH:
      return [action.payload, ...state];
    case ADD_MATCH_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
export default MatchReducer;
