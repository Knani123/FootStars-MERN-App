import React from "react";
import { Link } from "react-router-dom";

const CardUser = ({ el }) => {
  return (
    <div
      className="card mt-1 mx-auto text-center shadow"
      style={{ width: "15rem" }}
    >
      <img
        src={el.avatar}
        className="card-img-top mx-auto  "
        alt="..."
        style={{ maxWidth: "150px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{el.name}</h5>
        <Link to={`/profil/${el._id}`} className="btn btn-primary">
          {el.name}'s Prfofil
        </Link>
      </div>
    </div>
  );
};

export default CardUser;