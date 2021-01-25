import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { loginUser } from "../action/authAction";
import Icon from "../components/Icon";
import stade2 from "../video/stade2.jpeg";
import "./page.css";
const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AuthReducer);
  const [errors, setErrors] = useState(null);
  const history = useHistory();
  useEffect(() => {
    if (auth.isAuth) {
      history.push("/profil");
    }
    if (auth.errors) {
      setErrors(auth.errors);
      setTimeout(() => {
        setErrors(null);
      }, 5000);
    }
  }, [auth.isAuth, auth.errors]);

  const [info, setInfo] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };
  const loginNow = (e) => {
    // e.preventDefault();
    dispatch(loginUser(info));
  };

  const handleFocus = () => {
    setErrors(null);
  };
  return (
    <div className="container-fluid logi">
      <div className="row vh-100">
        <div className="col-lg-5 bg-white p-5">
          <header className="mx-3">
            <h1>
              <span className="font-weight-bold font-italic  mx-2">
                <Link to="/" className="text-decoration-none text-success">
                  FootStars <Icon />
                </Link>
              </span>
            </h1>
          </header>
          <div className="mt-3 ">
            <h2>Identifiez-vous</h2>
            <div className="form-group">
              <label htmlFor="logTel">Votre nom SVP !</label>
              <input
                className="form-control"
                onFocus={handleFocus}
                type="text"
                id="email"
                placeholder="email"
                value={info.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="logPassword">Mot de passe</label>
              <input
                className="form-control"
                onFocus={handleFocus}
                type="text"
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
              className="btn btn-success p-2 px-4"
              onClick={() => {
                if (info.email && info.password != "") {
                  loginNow();
                } else {
                  alert("check your name and password");
                }
              }}
            >
              connect
            </button>
          </div>
          <div className="m-5">
            <p>
              Vous souhaitez avoir un accès ?
              <Link to="/register">inscrirez-Vous </Link>
            </p>
          </div>
        </div>
        <div className="col-lg-7 overflow-hidden stade">
          <img src={stade2} style={{ width: "100vh" }} alt="stade image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
