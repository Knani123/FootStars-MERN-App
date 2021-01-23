import { SHOWIT } from "../action/type";
const initState = { tf: false, nota: "" };
const NotifAction = (state = initState, action) => {
  switch (action.type) {
    case SHOWIT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default NotifAction;
