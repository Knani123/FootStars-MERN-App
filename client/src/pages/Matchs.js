import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMatchs } from "../action/matchAction";
import { loadUser } from "../action/authAction";
import CardMatch from "../components/CardMatch";
import addMatch from "../video/addMatch.png";
import "./page.css";

const Matchs = () => {
  const [allMatch, setAllMatch] = useState([]);
  console.log(allMatch);
  const [info, setInfo] = useState({ val: "" });
  const [day, setDay] = useState({ date: "" });
  console.log("day", day);
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
  const handleDate = (e) => {
    setDay({ ...day, [e.target.id]: e.target.value });
  };

  return (
    <div
      className="container jumbotron"
      style={{ paddingTop: "10px", minHeight: "80vh" }}
    >
      <div className="mb-5 mt-3 border  shadow">
        {/* <h1 className="text-center text-success">Matchs</h1> */}
        <div
          className="d-flex  justify-content-center align-items-center  m-auto flex-wrap"
          // style={{ height: "40px" }}
        >
          <div className="box">
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
          <div className="box" style={{ backgroundColor: "#4cd137" }}>
            <input
              className=" txt"
              type="date"
              id="date"
              onChange={handleDate}
              isClearable
            />
          </div>
          <Link to="/createMatch" className="btn btn-warning m-2">
            créer votre match
          </Link>
        </div>
      </div>
      <div className="row text-center ">
        {allMatch.length ? (
          allMatch
            .filter(
              (el) =>
                el.name.toUpperCase().includes(info.val.toUpperCase().trim()) &&
                (day.date !== "" ? el.date.includes(day.date) : true)
            )
            .map((el, i) => <CardMatch el={el} key={i} />)
        ) : (
          <h1>Pas des matchs disponibles....</h1>
        )}
      </div>
    </div>
  );
};

export default Matchs;
