import React from "react";
import { Link } from "react-router-dom";

const Vitrine = () => {
  return (
    <div className=" mt-2 ">
      <div className="vitrine  ">
        <h1 className="band">La Révolution du foot</h1>
        <p className="para">Vous êtes l'homme du match</p>
        <div className="float-right mr-5">
          <Link to="/login">
            <button className="btn btn-success rounded-pill">login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-info rounded-pill mx-2">register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vitrine;