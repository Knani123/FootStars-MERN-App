import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./action/authAction";
import Icon from "./components/Icon";
import stadeLogo from "./video/stadeLogo.png";

const NavTest = () => {
  const location = useLocation();
  const auth = useSelector((state) => state.AuthReducer);
  const myUser = useSelector((state) => state.UserNow);
  console.log("myUser", myUser.name);

  console.log(
    location.pathname == "/register" || location.pathname == "/login"
  );
  const dispatch = useDispatch();
  return (
    <div
      className={`sticky-top ${
        location.pathname == "/register" || location.pathname == "/login"
          ? "vavi"
          : "non"
      }`}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light shadow bg-light"
        style={{ padding: "5px" }}
      >
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
                    className="nav-link navi font-weight-bold alert-info btn m-1 rounded-pill"
                    to="/profil"
                    activeStyle={{ color: "green" }}
                    style={{ padding: "5px" }}
                  >
                    {myUser && (
                      <img
                        src={myUser.avatar}
                        width="30px"
                        style={{ borderRadius: "50%" }}
                      />
                    )}{" "}
                    {myUser &&
                      myUser.name.charAt(0).toUpperCase() +
                        myUser.name.slice(1)}
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link navi font-weight-bold alert-danger btn m-1 rounded-pill"
                    to="/allUsers"
                    activeStyle={{ color: "green" }}
                  >
                    <i class="fas fa-users"></i> Players
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "green" }}
                className="nav-link navi font-weight-bold alert-success btn m-1 rounded-pill"
                to="/Matchs"
                tabIndex="-1"
                aria-disabled={false}
                style={{ padding: "5px" }}
              >
                <img
                  src={stadeLogo}
                  width="30px"
                  style={{ borderRadius: "50%" }}
                />{" "}
                Matchs
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {!auth.isAuth ? (
              <>
                <Link className=" me-2 navi" to="/register">
                  <button className="btn btn-outline-info me-2" type="submit">
                    Singup
                  </button>
                </Link>
                <Link className=" m-2 navi" to="/login">
                  <button
                    className="btn btn-outline-success me-2"
                    type="submit"
                  >
                    Singin
                  </button>
                </Link>
              </>
            ) : (
              <Link className=" me-2 navi" to="/">
                <button
                  onClick={() => {
                    dispatch(logOut());
                  }}
                  className="btn btn-danger logOutbtn"
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
