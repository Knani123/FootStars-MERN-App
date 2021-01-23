import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMatchs } from "../action/matchAction";
import { loadUser } from "../action/authAction";
import CardMatch from "../components/CardMatch";

const Matchs = () => {
  const [allMatch, setAllMatch] = useState([]);
  const [info, setInfo] = useState({ val: "" });

  const dispatch = useDispatch();
  const matchs = useSelector((state) => state.MatchReducer);
  useEffect(() => {
    dispatch(getMatchs());
    dispatch(loadUser());
  }, []);
  useEffect(() => {
    setAllMatch(matchs);
  }, [matchs]);
  const handleChange = (e) => {
    setInfo({ [e.target.id]: e.target.value });
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center flex-wrap ">
        <h1 className="text-center text-success">Matchs</h1>
        <input
          type="search"
          className=" alert-success mx-2 text-center"
          placeholder="search your match"
          value={info.val}
          id="val"
          onChange={handleChange}
        />
      </div>
      <div className="row text-center ">
        <div
          className="card mt-1 mx-auto text-center"
          style={{ width: "15rem", minHeight: "100px" }}
        >
          <Link to="/createMatch">
            <button>Create Your Match</button>
          </Link>
        </div>
        {allMatch.length ? (
          allMatch
            .filter((el) =>
              el.name.toUpperCase().includes(info.val.toUpperCase().trim())
            )
            .map((el) => <CardMatch el={el} />)
        ) : (
          <h1>wait....</h1>
        )}
      </div>
    </div>
  );
};

export default Matchs;