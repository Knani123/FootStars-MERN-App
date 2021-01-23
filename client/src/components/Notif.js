import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loadAlluser, loadUser } from "../action/authAction";
const Notif = () => {
  const [myUser, setMyUser] = useState({ notif: 0 });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    setMyUser(auth.user);
  }, [auth]);
  useEffect(() => {
    dispatch(loadUser());
  }, [auth.user.notif]);
  console.log("myUser", auth);
  console.log("myUser", myUser);
  return <h1>{myUser ? myUser.notif : "notification"}</h1>;
};

export default Notif;
