import React from "react";
import { Link } from "react-router-dom";
import matchStade from "../video/matchStade.png";
import "./components.css";
import sifflet from "../video/sifflet.png";
const CardMatch = ({ el }) => {
  return (
    <div
      className="card mt-1 mx-auto text-center shadow cardMatch"
      style={{ width: "15rem" }}
    >
      <Link
        to={el._id ? `/Matchs/${el._id}` : "/match"}
        className="text-decoration-none"
      >
        <img
          src={matchStade}
          className="card-img-top border border-success m-auto"
          style={{ maxWidth: "200px" }}
          alt="..."
        />
        <div className="card-body">
          <div className="card-title">
            {el.name ? <h5>{el.name}</h5> : <h5>wait ...</h5>}
          </div>
          <p className="card-text">
            <img
              src={sifflet}
              width="20px"
              style={{ position: "relative", bottom: "5px" }}
            />{" "}
            {el.date[0]} à <span className="text-danger">{el.date[1]}:00</span>
          </p>
          <Link
            to={el._id ? `/Matchs/${el._id}` : "/match"}
            className="btn btn-primary"
          >
            Match info
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default CardMatch;
