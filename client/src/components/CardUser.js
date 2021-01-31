import React from "react";
import { Link } from "react-router-dom";

const CardUser = ({ el }) => {
  return (
    <div
      className="col-lg-3 card mt-1 mx-auto text-center shadow cardUser"
      style={{ width: "15rem" }}
    >
      <img
        src={el.avatar}
        className="card-img-top mx-auto  "
        alt="..."
        style={{ maxWidth: "150px" }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
        </h5>
        <Link to={`/profil/${el._id}`} className="btn btn-primary">
          {el.name.charAt(0).toUpperCase() + el.name.slice(1)}'s Prfofil
        </Link>
      </div>
    </div>
  );
};

export default CardUser;
