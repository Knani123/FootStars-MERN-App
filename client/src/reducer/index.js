import AuthReducer from "./authReducer";
import NotifAction from "./notifReducer";
import MatchReducer from "./matchReducer";
import UserReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  AuthReducer,
  NotifAction,
  MatchReducer,
  UserReducer,
});

export default rootReducer;
