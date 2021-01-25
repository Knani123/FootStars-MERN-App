import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMatchs } from "../action/matchAction";
import { loadUser } from "../action/authAction";
import CardMatch from "../components/CardMatch";
import addMatch from "../video/addMatch.png";
import "./page.css";
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
        <figure
          className="card mt-1 mx-auto text-center figAdd"
          style={{ width: "15rem", minHeight: "100px" }}
        >
          <Link to="/createMatch">
            <img
              src={addMatch}
              style={{ width: "15rem" }}
              alt="Ajouter Match"
            />

            <figcaption className="btn btn-warning m-2">
              créer votre match
            </figcaption>
          </Link>
        </figure>
        {allMatch.length ? (
          allMatch
            .filter((el) =>
              el.name.toUpperCase().includes(info.val.toUpperCase().trim())
            )
            .map((el, i) => <CardMatch el={el} key={i} />)
        ) : (
          <h1>wait....</h1>
        )}
      </div>
    </div>
  );
};

export default Matchs;
