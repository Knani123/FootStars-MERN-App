import React from "react";
import { Link } from "react-router-dom";
import matchStade from "../video/matchStade.png";

const CardMatch = ({ el }) => {
  return (
    <div
      className="card mt-1 mx-auto text-center shadow"
      style={{ width: "15rem" }}
    >
      <img
        src={matchStade}
        className="card-img-top border border-success m-auto"
        style={{ maxWidth: "200px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {el.name ? <h5>{el.name}</h5> : <h5>wait ...</h5>}
        </h5>
        <p className="card-text">{el.begin}</p>
        <Link
          to={el._id ? `/Matchs/${el._id}` : "/match"}
          className="btn btn-primary"
        >
          Match info
        </Link>
      </div>
    </div>
  );
};

export default CardMatch;
