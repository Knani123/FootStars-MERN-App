import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { registerUser } from "../action/authAction";
import Icon from "../components/Icon";
import stade from "../video/stade.jpg";
import "./page.css";
const Register = () => {
  const auth = useSelector((state) => state.AuthReducer);
  const [errors, setErrors] = useState(null);
  const history = useHistory();
  useEffect(() => {
    if (auth.isAuth) {
      history.push("/profil");
    }
    if (auth.errors) {
      setErrors(auth.errors);
    }
  }, [auth.isAuth, auth.errors]);

  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };
  const registerNow = () => {
    dispatch(registerUser(info));
  };

  const handleFocus = () => {
    setErrors(null);
  };
  return (
    <div className="container-fluid logi">
      <div className="row ">
        <div className="col-lg-5 bg-white  p-5">
          <header className="mx-3 mb-2">
            <h1
              className="font-weight-bold   m-auto text-center "
              style={{ width: "400px" }}
            >
              <Link to="/" className="text-decoration-none">
                FootStars <Icon />
              </Link>
            </h1>
          </header>
          <div className="mt-3 shadow-lg m-auto p-3" style={{ width: "400px" }}>
            <h2>Identifiez-vous</h2>
            <div className="form-group">
              <label htmlFor="name">Votre nom SVP !</label>
              <input
                className="form-control fromR"
                onFocus={handleFocus}
                type="text"
                id="name"
                placeholder="name"
                value={info.name}
                onChange={handleChange}
                style={{ width: "360px", height: "50px" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control fromR"
                style={{ width: "360px", height: "50px" }}
                onFocus={handleFocus}
                type="email"
                id="email"
                placeholder="email"
                value={info.email}
                onChange={handleChange}
              />
            </div>{" "}
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                style={{ width: "360px", height: "50px" }}
                className="form-control fromR"
                onFocus={handleFocus}
                type="Number"
                id="phone"
                placeholder="phone"
                value={info.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                style={{ width: "360px", height: "50px" }}
                id="password"
                className="form-control fromR"
                onFocus={handleFocus}
                type="password"
                id="password"
                placeholder="password"
                value={info.password}
                onChange={handleChange}
              />
            </div>
            {errors &&
              errors.map((el, i) => (
                <h5 key={i} className="alert alert-danger text-center">
                  {el.param} {el.msg}
                </h5>
              ))}
            <button
              type="submit"
              className="btn btn-primary p-2 px-4 w-100"
              onClick={() => {
                if (info.email && info.password !== "") {
                  registerNow();
                } else {
                  alert("check your name and password");
                }
              }}
            >
              connect
            </button>
            <div className="m-3">
              <p>
                Vous avez deja un accès ?
                <Link to="/login" className="text-success">
                  login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 overflow-hidden stade vh-100 ">
          <img
            src={stade}
            style={{ width: "100%", height: "100vh" }}
            alt="stade image"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
