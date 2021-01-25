import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./action/authAction";
import Icon from "./components/Icon";

const NavTest = () => {
  const auth = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light alert-secondary">
        <NavLink
          exact
          className="navbar-brand text-info font-italic font-wright-bold "
          to="/"
          activeStyle={{ color: "green" }}
        >
          Footstars <Icon />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {auth.isAuth && (
              <>
                <li className="nav-item active">
                  <NavLink
                    className="nav-link font-weight-bold alert-info btn m-1 border border-dark"
                    to="/profil"
                    activeStyle={{ color: "green" }}
                  >
                    Profil <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link font-weight-bold alert-danger btn m-1 border border-dark"
                    to="/allUsers"
                    activeStyle={{ color: "green" }}
                  >
                    Players
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "green" }}
                className="nav-link font-weight-bold alert-success btn m-1 border border-dark"
                to="/Matchs"
                tabIndex="-1"
                aria-disabled={false}
              >
                Matchs
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {!auth.isAuth ? (
              <>
                <Link className=" me-2" to="/register">
                  <button className="btn btn-outline-info me-2" type="submit">
                    Singup
                  </button>
                </Link>
                <Link className=" m-2" to="/login">
                  <button
                    className="btn btn-outline-success me-2"
                    type="submit"
                  >
                    Singin
                  </button>
                </Link>
              </>
            ) : (
              <Link className=" me-2" to="/">
                <button
                  onClick={() => {
                    dispatch(logOut());
                  }}
                  className="btn btn-danger"
                >
                  logout
                </button>
              </Link>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavTest;
