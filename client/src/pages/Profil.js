import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadUser } from "../action/authAction";
import { getMyMatchs } from "../action/matchAction";
import { getUserNow } from "../action/notifAction";
import CardProfil from "../components/CardProfil";
import TableSkills from "../components/TableSkills";

const Profil = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AuthReducer);
  const myMatch = useSelector((state) => state.MatchReducer);
  const history = useHistory();
  const stableDispatch = useCallback(dispatch, []);
  useEffect(() => {
    stableDispatch(loadUser());
    stableDispatch(getMyMatchs());
  }, []);
  useEffect(() => {
    stableDispatch(getUserNow(auth.user));
  }, [auth]);
  useEffect(() => {
    if (!auth.isAuth) {
      history.push("/");
    }
  }, [auth.isAuth]);
  return (
    <div className="my-5 shadow">
      <div className="container border">
        <div className="row p-2">
          <CardProfil auth={auth} myMatch={myMatch} />
          <TableSkills auth={auth} edit={true} />
        </div>
      </div>
    </div>
  );
};

export default Profil;
