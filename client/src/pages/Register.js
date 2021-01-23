import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { registerUser } from "../action/authAction";
import Icon from "../components/Icon";
import stade from "../video/stade.jpg";

import registerPic from "../video/registerPic.jpg";

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
    // e.preventDefault();
    dispatch(registerUser(info));
    // clearInput();
  };
  const clearInput = () => {
    setInfo({ name: "", email: "", phone: "", password: "" });
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
                <Link to="/" className="text-decoration-none">
                  FootStars <Icon />
                </Link>
              </span>
            </h1>
          </header>
          <div className="mt-3 ">
            <h2>Identifiez-vous</h2>
            <div className="form-group">
              <label htmlFor="name">Votre nom SVP !</label>
              <input
                id="name"
                className="form-control"
                onFocus={handleFocus}
                type="text"
                id="name"
                placeholder="name"
                value={info.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="form-control"
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
                id="phone"
                className="form-control"
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
                id="password"
                className="form-control"
                onFocus={handleFocus}
                type="password"
                id="password"
                placeholder="password"
                value={info.password}
                onChange={handleChange}
              />
            </div>
            {errors &&
              errors.map((el) => (
                <h5 className="alert alert-danger text-center">
                  {el.param} {el.msg}
                </h5>
              ))}
            <button
              type="submit"
              className="btn btn-primary p-2 px-4"
              onClick={() => {
                if (info.email && info.password != "") {
                  registerNow();
                } else {
                  alert("check your name and password");
                }
              }}
            >
              connect
            </button>
            <div class="m-3">
              <p>
                Vous avez deja un accès ?
                <Link to="/login" className="text-success">
                  login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 overflow-hidden stade">
          <img src={stade} style={{ width: "120vh" }} />
        </div>
      </div>
    </div>
    // <div
    //   style={{
    //     background: `no-repeat  center  url(${registerPic})`,
    //     backgroundSize: "cover",
    //   }}
    //   className="vh-100 d-flex flex-column align-items-center "
    // >
    //   <h1 className="text-center p-2 text-info">Register now !</h1>
    //   <form className="d-flex flex-column w-75 " onSubmit={registerNow}>
    //     <input
    //       type="text"
    //       id="name"
    //       placeholder="name"
    //       onChange={handleChange}
    //       value={info.name}
    //     />
    //     <input
    //       type="email"
    //       id="email"
    //       placeholder="email"
    //       onChange={handleChange}
    //       value={info.email}
    //     />
    //     <input
    //       type="Number"
    //       id="phone"
    //       placeholder="phone"
    //       onChange={handleChange}
    //       value={info.phone}
    //     />
    //     <input
    //       type="password"
    //       id="password"
    //       placeholder="password"
    //       onChange={handleChange}
    //       value={info.password}
    //     />
    //     {errors &&
    //       errors.map((el) => (
    //         <h5 className="alert alert-danger text-center">
    //           {el.param} {el.msg}
    //         </h5>
    //       ))}
    //     <button type="submit" className="btn btn-info w-25">
    //       Register
    //     </button>
    //   </form>
    // </div>
  );
};

export default Register;
