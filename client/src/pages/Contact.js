import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import GoogleMap from "../components/GoogleMap";
import { editByidUserMsg } from "../action/authAction";

const Contact = () => {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState({ email: "", message: "" });
  console.log(msg);
  const handleChange = (e) => {
    setMsg({ ...msg, [e.target.id]: e.target.value });
    setMsg({ email: "", message: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editByidUserMsg("601b15469986e23024e94219", msg));
    setMsg({ email: "", message: "" });
  };
  return (
    <div className=" ">
      <h1
        className="font-weight-bold mx-auto text-center  "
        style={{ width: "400px" }}
      >
        <Link to="/" className="text-decoration-none">
          FootStars <Icon />
        </Link>
      </h1>
      <div className="  d-flex flex-wrap justify-content-center vh-100">
        <form
          onSubmit={handleSubmit}
          className=" shadow-lg border p-4 m-3 h-75"
          style={{ width: "400px" }}
        >
          <h5>
            Envoyez nous un message{" "}
            <i class="fas fa-comment-dots text-info"></i>
          </h5>
          <p style={{ fontSize: "12px", color: "green" }}>
            *On Vous répondra le plus tôt possible
          </p>
          <hr />
          <div className="form-group">
            <label htmlFor="logTel">Votre Email SVP</label>
            <input
              style={{ width: "360px", height: "50px" }}
              className=" form-control"
              type="email"
              id="email"
              placeholder="ex: user@gmail.com"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Votre message:</label>
            <textarea
              className="p-2"
              style={{ width: "360px", height: "200px" }}
              id="message"
              placeholder="Taper votre message"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-outline-info rounded-pill p-2 float-right"
          >
            Envoyer
          </button>
        </form>
        <div
          className="shadow-lg p-4 m-3 h-75  border"
          style={{ width: "530px" }}
        >
          <p>
            <i className="fas fa-map-marker-alt text-warning"></i> Adresse:
            Sousse, Aidi Bou Ali, code postale 4045
          </p>
          <p>
            <i class="fas fa-envelope-open-text text-success"></i> Email:
            footstars@gmail.com
          </p>
          <p>
            <i className="fas fa-mobile-alt text-danger"></i> Phone: +216 73 698
            254 / +216 54 332 335
          </p>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;

////wawawawaawa
