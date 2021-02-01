import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMatchs, editMatch, removeParti } from "../action/matchAction";
import { loadAlluser } from "../action/authAction";
import matchInfo from "../video/matchInfo.jpg";
import Player from "../components/Player";
import cancelled from "../video/cancelled.png";
const OneMatch = () => {
  const Auth = useSelector((state) => state.AuthReducer);

  const [owner, setOwner] = useState(null);
  const [user, setUser] = useState("");
  const [all, setAll] = useState([]);
  // const [parti, setParti] = useState([]);
  const paramas = useParams();
  const id = paramas.id;

  const [oneMatch, setOneMatch] = useState([{ owner: "404" }]);
  const dispatch = useDispatch();
  const matchs = useSelector((state) => state.MatchReducer);
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!matchs.find((el) => el._id == id)) {
  //       alert("ce match est canceled");
  //     }
  //   }, 2000);
  // }, [matchs]);
  useEffect(() => {
    dispatch(getMatchs());
    dispatch(loadAlluser());
  }, []);

  useEffect(() => {
    setOneMatch(matchs.find((el) => el._id === id));
  }, [matchs]);

  useEffect(() => {
    setOneMatch(matchs.find((el) => el._id === id));
  }, [oneMatch && oneMatch.participants]);

  useEffect(() => {
    if (!Auth.user.length) {
      setUser(Auth.user);
    } else {
      {
        oneMatch && setOwner(Auth.user.find((el) => el._id === oneMatch.owner));
      }
      setAll(Auth.user);
    }
  }, [Auth]);

  // useEffect(() => {
  //   {
  //     oneMatch &&
  //       setParti(all.filter((el) => oneMatch.participants.includes(el._id)));
  //   }
  // }, [matchs]);
  return (
    <>
      {oneMatch ? (
        <div className="container">
          {oneMatch.date && (
            <div className="row">
              <div className="col-lg-4 border border-info mt-3 vh-75  d-flex flex-wrap ">
                <div className="w-100 mt-3 m-auto">
                  <h2 className="text-center">{oneMatch.name}</h2>
                  <img
                    src={matchInfo}
                    alt={oneMatch.name}
                    style={{ width: "300px" }}
                  />
                </div>
                <div className="w-100 mt-3 m-auto">
                  <h5 className="m-3">
                    Format: {oneMatch.format} vs {oneMatch.format}
                  </h5>
                  <h5 className="m-3">Date: le {oneMatch.date[0]}</h5>
                  <h5 className="m-3">L'heure: à {oneMatch.date[1]}:00</h5>
                  <h5 className="m-3">
                    By:&nbsp;
                    <Link to={`/profil/${oneMatch.owner}`}>
                      {owner ? owner.name : "wait.."}
                    </Link>
                  </h5>
                  {oneMatch.participants && (
                    <div className="d-flex justify-content-between align-items-center ">
                      <h5
                        className={
                          Number(oneMatch.format) <=
                          oneMatch.participants.length
                            ? "text-danger"
                            : "text-success"
                        }
                      >
                        {Number(oneMatch.format) <= oneMatch.participants.length
                          ? "places réservées :'("
                          : "places limitées !!"}
                      </h5>
                      <button
                        disabled={
                          Number(oneMatch.format) <=
                            oneMatch.participants.length &&
                          !oneMatch.participants.includes(user._id)
                        }
                        className={`btn btn-${
                          !oneMatch.participants.includes(user._id)
                            ? "success"
                            : "danger"
                        } float-right m-3`}
                        onClick={(e) => {
                          {
                            !oneMatch.participants.includes(user._id)
                              ? dispatch(
                                  editMatch(id, { participants: user._id })
                                )
                              : dispatch(
                                  removeParti(id, {
                                    participants: oneMatch.participants.filter(
                                      (el) => el != user._id
                                    ),
                                  })
                                );
                          }
                          // dispatch(getMatchs());
                        }}
                      >
                        {!oneMatch.participants.includes(user._id)
                          ? "Participer"
                          : "Quitter"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col border border-success mt-3 vh-75">
                <h1 className="text-center">Liste de participants</h1>
                <div className="d-flex flex-wrap justify-content-center">
                  {all
                    .filter((el) => oneMatch.participants.includes(el._id))
                    .map((el, i) => (
                      <Player el={el} key={i} />
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="vh-100 d-flex justify-content-center align-items-center"
          style={{
            background: `center url(${cancelled})`,
          }}
        >
          <h5 className="alert alert-light text-center m-2 text-danger">
            Il semble que ce match a été supprimé !
          </h5>
        </div>
      )}
    </>
  );
};

export default OneMatch;
