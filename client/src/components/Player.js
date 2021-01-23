import React from "react";
import { Link } from "react-router-dom";

const Player = ({ el }) => {
  return (
    <div
      className="card text-center m-2 p-2"
      style={{
        cursor: "pointer",
      }}
      title={el.name}
    >
      <Link to={`/profil/${el._id}`}>
        <img
          src={el.avatar}
          alt={el.name}
          title={el.name}
          style={{
            borderRadius: "50%",
            maxWidth: "50px",
            cursor: "pointer",
          }}
        />
        <h5>{el.name}</h5>
      </Link>
    </div>
  );
};

export default Player;
