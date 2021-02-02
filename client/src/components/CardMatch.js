import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import matchStade from "../video/matchStade.png";
import "./components.css";
import sifflet from "../video/sifflet.png";
import { deleteMatch, updateMatch } from "../action/matchAction";
const CardMatch = ({ el }) => {
  const myUser = useSelector((state) => state.UserNow);
  console.log("myUser", myUser.email);
  const dispatch = useDispatch();
  return (
    <div
      className="card mt-1 mx-auto text-center shadow cardMatch"
      style={{ width: "15rem" }}
    >
      {myUser.email == "admin@admin.com" && (
        <span className="p-1 text-light   ">
          <i
            class="fas fa-check-square confirmMatch "
            title="confirm"
            onClick={() =>
              dispatch(updateMatch(el._id, { statue: "Confirmé" }))
            }
          ></i>
          <i
            class="fas fa-times removeMatch"
            title="remove"
            onClick={() => dispatch(deleteMatch(el._id))}
          ></i>
        </span>
      )}
      <Link
        to={el._id ? `/Matchs/${el._id}` : "/match"}
        className="text-decoration-none"
      >
        <img
          src={matchStade}
          className="card-img-top border border-success m-auto"
          style={{ maxWidth: "200px" }}
          alt="..."
        />
        <div className="card-body">
          <div className="card-title">
            {el.name ? (
              <div className="d-flex justify-content-center">
                <h5>{el.name}</h5> &nbsp;
                <span
                  className={`text-${
                    el.statue == "Confirmé" ? "success badge" : "warning badge"
                  }`}
                >
                  &#40; {el.statue} &#41;
                </span>{" "}
              </div>
            ) : (
              <h5>wait ...</h5>
            )}
          </div>
          <p className="card-text">
            <img
              src={sifflet}
              width="20px"
              style={{ position: "relative", bottom: "5px" }}
            />{" "}
            {el.date[0]} à <span className="text-danger">{el.date[1]}:00</span>
          </p>
          <Link
            to={el._id ? `/Matchs/${el._id}` : "/match"}
            className="btn btn-primary"
          >
            Match info
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default CardMatch;
