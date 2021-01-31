import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMatch } from "../action/matchAction";
import { loadAlluser } from "../action/authAction";
import build from "../video/build.PNG";
import player from "../video/player.png";
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
  const [info, setInfo] = useState({ name: "", date: "", format: "" });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const addNewMatch = (e) => {
    e.preventDefault();
    dispatch(addMatch(info));
  };

  if (errors) {
    if (errors[0].msg === "No error") {
      setTimeout(() => history.push("/Matchs"), 2500);
    }
  }

  return (
    <div className="col-lg-6 m-auto">
      <form
        action=""
        className="d-flex flex-column justify-content-center  "
        onSubmit={addNewMatch}
        className="form-group "
      >
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          placeholder="name"
          onChange={handleChange}
          className="form-control form-control-success"
        />
        <label htmlFor="name">Date</label>
        <input
          required
          type="datetime-local"
          id="date"
          placeholder="date"
          className="form-control"
          onChange={handleChange}
        />
        <label htmlFor="format">Format</label>
        <select
          required
          id="format"
          placeholder="format"
          onChange={handleChange}
          className="form-control"
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
                errors[0].msg === "No error"
                  ? `alert alert-success text-center`
                  : `alert alert-danger text-center`
              }
            >
              {el.param} {el.msg}
            </h5>
          ))}

        <button type="submit" className="btn btn-success ">
          confirm
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
            <img className="d-block w-100 " src={build} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 " src={player} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 " src={player} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-info"
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
            className="carousel-control-next-icon  bg-success"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default MatchCreate;
