import { GET_USER_NOW } from "../action/type";
const initState = {
  name: "User",
  avatar: "http://localhost:8000/uploads/1612113710892-profile.jpg",
};
const UserNow = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_NOW:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default UserNow;
