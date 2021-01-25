import AuthReducer from "./authReducer";
import UserNow from "./notifReducer";
import MatchReducer from "./matchReducer";
import UserReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  AuthReducer,
  UserNow,
  MatchReducer,
  UserReducer,
});

export default rootReducer;
