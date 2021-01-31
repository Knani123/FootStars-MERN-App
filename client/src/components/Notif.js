import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../action/authAction";
const Notif = () => {
  const [myUser, setMyUser] = useState({ notif: 0 });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AuthReducer);
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    setMyUser(auth.user);
  }, [auth]);
  useEffect(() => {
    stableDispatch(loadUser());
  }, [auth.user.notif]);

  return <h1>{myUser ? myUser.notif : "notification"}</h1>;
};

export default Notif;
