import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loadUser } from "../action/authAction";
import { getMyMatchs } from "../action/matchAction";
import { notif } from "../action/notifAction";
import CardProfil from "../components/CardProfil";
import Notif from "../components/Notif";
import TableSkills from "../components/TableSkills";

const Profil = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AuthReducer);
  const myMatch = useSelector((state) => state.MatchReducer);
  const history = useHistory();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getMyMatchs());
  }, []);

  useEffect(() => {
    if (!auth.isAuth) {
      history.push("/");
    }
  }, [auth.isAuth]);
  return (
    <div className=" border border-info">
      <div className="container">
        <div className="row text-center">
          <CardProfil auth={auth} myMatch={myMatch} />
          <TableSkills auth={auth} edit={true} />
        </div>
      </div>
    </div>
  );
};

export default Profil;
