import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
const bg = "hsla(120,100%,75%,0.3)";

const HomeComponent = ({ name, src, link }) => {
  return (
    <div className="col  compHome">
      <Link to={link} className="text-decoration-none">
        <div
          className="card text-center m-2 p-2"
          style={{
            cursor: "pointer",
            backgroundColor: `${bg}`,
          }}
          title="none"
        >
          <img src={src} alt={name} title={name} className="m-auto imageHome" />
          <h5 className="text-center m-2 text-danger">{name}</h5>
        </div>
      </Link>
    </div>
  );
};

export default HomeComponent;
