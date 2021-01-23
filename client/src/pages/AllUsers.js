import React, { useEffect, useState } from "react";
import { loadAlluser } from "../action/authAction";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { notif } from "../action/notifAction";
import CardUser from "../components/CardUser";

const AllUsers = () => {
  const [info, setInfo] = useState({ val: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notif({ tf: false }));
  }, []);

  const Auth = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    dispatch(loadAlluser());
  }, []);
  useEffect(() => {
    if (!Auth.isAuth) {
      history.push("/");
    }
  }, [Auth.isAuth]);
  const handleChange = (e) => {
    setInfo({ [e.target.id]: e.target.value });
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center flex-wrap ">
        <h1 className="text-center text-success">Players</h1>
        <input
          type="search"
          className=" alert-success mx-2 text-center"
          placeholder="search your match"
          value={info.val}
          id="val"
          onChange={handleChange}
        />
      </div>
      {Auth.user && (
        <div className="row text-center ">
          {Auth.user.length ? (
            Auth.user
              .filter((el) =>
                el.name.toUpperCase().includes(info.val.toUpperCase().trim())
              )
              .map((el) => <CardUser el={el} />)
          ) : (
            <h1>Wait ...</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default AllUsers;
