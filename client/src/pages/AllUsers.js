import React, { useEffect, useState } from "react";
import { loadAlluser } from "../action/authAction";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CardUser from "../components/CardUser";

const AllUsers = () => {
  const [info, setInfo] = useState({ val: "" });
  const history = useHistory();
  const dispatch = useDispatch();

  const Auth = useSelector((state) => state.AuthReducer);
  const UserNow = useSelector((state) => state.UserNow);
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
    <div
      className="container jumbotron"
      style={{ paddingTop: "10px", minHeight: "80vh" }}
    >
      {" "}
      <div className="d-flex justify-content-center align-items-center flex-wrap ">
        {/* <h1 className="text-center text-success">Players</h1> */}
        <div className="box mb-5 mt-3 border  shadow">
          <input
            type="search"
            className=" txt"
            placeholder="Tapez pour rechercher"
            value={info.val}
            id="val"
            onChange={handleChange}
          />
          <a href="#" className="boxBtn">
            <i class="fas fa-futbol"></i>
          </a>
        </div>
      </div>
      {Auth.user && (
        <div className="row text-center ">
          {Auth.user.length ? (
            Auth.user
              .filter(
                (el) =>
                  el.name
                    .toUpperCase()
                    .includes(info.val.toUpperCase().trim()) &&
                  el._id !== UserNow._id
              )
              .map((el, i) => <CardUser el={el} key={i} />)
          ) : (
            <h1>Wait ...</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default AllUsers;
