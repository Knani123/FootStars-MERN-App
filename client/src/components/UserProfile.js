import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { loadAlluser } from "../action/authAction";
import CardProfilUser from "./CardProfilUser";
import TableSkills from "./TableSkills";

import { getMyMatchs } from "../action/matchAction";

const UserProfile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AuthReducer);

  const [user, setUser] = useState(null);
  const history = useHistory();
  useEffect(() => {
    dispatch(loadAlluser());
  }, []);
  useEffect(() => {
    setUser(auth.user.find((el) => el._id == params.id));
  }, [auth]);

  useEffect(() => {
    if (!auth.isAuth) {
      history.push("/login ");
    }
  }, [auth.isAuth]);

  return (
    <div className=" border border-info">
      <div className="container">
        <div className="row">
          {user ? (
            <>
              <CardProfilUser auth={{ user }} />
              <TableSkills auth={{ user }} edit={false} />
            </>
          ) : (
            <h1>wait ...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
