import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMatch } from "../action/matchAction";
import { loadAlluser } from "../action/authAction";
import build from "../video/build.PNG";
import "./page.css";

const MatchCreate = () => {
  const [errors, setErrors] = useState([
    { msg: "Input is empty Create your Match" },
  ]);
  const [users, setusers] = useState([]);

  const match = useSelector((state) => state.MatchReducer);

  const Auth = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    dispatch(loadAlluser());
  }, []);
  useEffect(() => {
    setusers(Auth.user);
    setErrors(Auth.user.errors);
  }, [Auth]);

  useEffect(() => {
    setErrors(match.errors);
  }, [match.errors]);

  const history = useHistory();
  const dispatch = useDispatch();
  const [Time, setTime] = useState(["", ""]);
  const [info, setInfo] = useState({
    name: "",
    date: Time,
    format: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };
  const dateChange = (e) => {
    console.log("Time1", Time);
    Time[0] = e.target.value;
    setTime(Time);
    console.log("Time2", Time);
  };
  const timeChange = (e) => {
    Time[1] = e.target.value;
    console.log("Time", Time);
    setTime(Time);
  };

  const addNewMatch = (e) => {
    e.preventDefault();
    dispatch(addMatch(info));
  };

  if (errors) {
    if (errors[0].msg === "Le match est bien ajouté ") {
      setTimeout(() => history.push("/Matchs"), 2500);
    }
  }

  return (
    <div className="container jumbotron">
      <div className="matchD alert-warning shadow-lg m-auto p-3">
        <h4 className="text-center text-info">Créer votre match</h4>
        <hr />
        <form
          className="d-flex flex-column justify-content-center  "
          onSubmit={addNewMatch}
          className="form-group"
        >
          <label htmlFor="name">Name</label>
          <input
            className="  formi form-control"
            // className="  formiform-control"
            required
            type="text"
            id="name"
            placeholder="name"
            value={info.email}
            onChange={handleChange}
          />
          <label htmlFor="name">Date</label>
          <input
            className=" formi form-control"
            required
            type="date"
            // id="date"
            id="1"
            placeholder="date"
            // onChange={handleChange}
            onChange={dateChange}
          />
          <label htmlFor="hour">L'heure:</label>
          <select
            className=" formi form-control"
            required
            // id="hour"
            id="2"
            placeholder="hour"
            // onChange={handleChange}
            onChange={timeChange}
          >
            <option>--À quelle heure commence le match ?--</option>
            <option value="8">8:00</option>
            <option value="9">9:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
          </select>
          <label htmlFor="format">Format</label>
          <select
            required
            id="format"
            placeholder="format"
            onChange={handleChange}
            className=" formi form-control"
          >
            <option>--Please choose a Format--</option>
            <option value="5">5/5</option>
            <option value="6">6/6</option>
            <option value="7">7/7</option>
            <option value="8">8/8</option>
          </select>
          {errors &&
            errors.map((el, i) => (
              <h5
                key={i}
                className={
                  errors[0].msg === "Le match est bien ajouté "
                    ? `alert alert-success text-center`
                    : `alert alert-danger text-center`
                }
              >
                {el.param} {el.msg}
              </h5>
            ))}

          <button type="submit" className="btn badge-success float-right">
            <i class="fas fa-check-circle"></i> Confirm
          </button>
        </form>
        <hr />
        <div
          id="carouselExampleControls"
          className="carousel slide "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 "
                src={build}
                alt="First slide"
                style={{ maxHeight: "200px", maxWidth: "450px" }}
              />
            </div>
            <div className="carousel-item m-auto" style={{ maxWidth: "600px" }}>
              <img
                className="d-block w-100 "
                src="https://img.fifa.com/image/upload/t_l4/sluugjllphb92fexlvcy.jpg"
                alt="Second slide"
                style={{ maxHeight: "200px", maxWidth: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 "
                src="https://www.letelegramme.fr/images/2020/11/25/diego-maradona-s-est-eteint-mercredi-25-novembre-mais-sa_5413834_676x429p.jpg?v=1"
                alt="Third slide"
                style={{ maxHeight: "200px", maxWidth: "450px" }}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MatchCreate;
