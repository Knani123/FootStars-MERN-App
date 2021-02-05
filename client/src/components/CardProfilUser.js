import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editByidUser, editOnlyidUser } from "../action/authAction";
import { useHistory } from "react-router-dom";
import "./components.css";
const CardProfilUser = ({ auth }) => {
  const history = useHistory();
  const [myMatch, setMyMatch] = useState([]);
  const dispatch = useDispatch();
  const matchInit = useSelector((state) => state.MatchReducer);
  const UserReducer = useSelector((state) => state.UserReducer);
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    setMyMatch(matchInit);
  }, [UserReducer.user]);
  return (
    <div
      className="card text-center col-sm-12 col-md-6 col-lg-6 m-auto"
      style={{ width: "15rem" }}
    >
      <img
        src={auth.user && auth.user.avatar}
        className="card-img-top border border-success m-auto"
        style={{ maxWidth: "200px" }}
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">
          {auth.user ? (
            <>
              <i className="fas fa-signature"></i>{" "}
              {auth.user.name &&
                auth.user.name.charAt(0).toUpperCase() +
                  auth.user.name.slice(1)}
            </>
          ) : (
            <>wait ...</>
          )}
        </h5>
        <p className="card-text">j'accepte tous les défis de Match</p>
        {myMatch[0] ? (
          <button
            onClick={() => {
              {
                !auth.user.notif.includes(myMatch[0]._id)
                  ? stableDispatch(
                      editByidUser(auth.user._id, {
                        notif: myMatch[0]._id,
                      })
                    )
                  : stableDispatch(
                      editOnlyidUser(auth.user._id, {
                        notif: auth.user.notif.filter(
                          (el) => el !== myMatch[0]._id
                        ),
                      })
                    );
              }
              // history.push(`/load`);
            }}
            className={
              !auth.user.notif.includes(myMatch[0]._id)
                ? "btn btn-success"
                : "btn btn-danger"
            }
          >
            {!auth.user.notif.includes(myMatch[0]._id) ? (
              <span>
                Inviter le <i class="fas fa-user-plus"></i>
              </span>
            ) : (
              <span>
                Annuler l'invitation <i class="fas fa-user-times"></i>
              </span>
            )}
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => {
              alert("Create your Match before");
              history.push("/createMatch");
            }}
          >
            invit le
          </button>
        )}
      </div>
    </div>
  );
};

export default CardProfilUser;
