import React from "react";
import { Link } from "react-router-dom";

const CardUser = ({ el }) => {
  return (
    <div
      className="card mt-1 mx-auto text-center shadow cardMatch"
      style={{ width: "12rem", paddingBottom: "0" }}
    >
      <Link to={`/profil/${el._id}`} className="btn">
        <img
          src={el.avatar}
          className="card-img-top mx-auto  "
          alt="..."
          style={{ maxWidth: "150px", height: "150px" }}
        />
        <div className="card-body" style={{ paddingBottom: "0" }}>
          <h5 className="card-title btn btn-info">
            {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
          </h5>
          {/* {el.name.charAt(0).toUpperCase() + el.name.slice(1)}'s Prfofil */}
        </div>
      </Link>
    </div>
  );
};

export default CardUser;
