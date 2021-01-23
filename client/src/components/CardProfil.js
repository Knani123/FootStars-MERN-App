import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMyMatchs } from "../action/matchAction";
import { loadAlluser } from "../action/authAction";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const CardProfil = ({ auth, myMatch }) => {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const history = useHistory();

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
          {auth.user ? <> Player name: {auth.user.name}</> : <>wait ...</>}
        </h5>
        <p className="card-text">j'accepte tous les défis</p>
        <Link
          to={myMatch[0] && `/Matchs/${myMatch[0]._id}`}
          onClick={() => {
            if (!myMatch[0]) {
              alert("You must create match before");
              history.push("/createMatch");
            }
          }}
          className="btn btn-success"
        >
          Votre match
        </Link>
        <button
          onClick={() => {
            dispatch(deleteMyMatchs());
            alert("Your match is deleted");
            history.push("/load");
          }}
          className="btn btn-danger m-1"
        >
          Cancel Your Match
        </button>
      </div>
      <div>
        <button onClick={openModal} className="btn btn-outline-info m-1">
          Les invitations
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {auth.user && (
            <div>
              {auth.user.notif && (
                <span className="text-center text-success">
                  {auth.user.notif.length ? (
                    <h3>Vous êtes invités à rejoindre ces matchs &#128512;</h3>
                  ) : (
                    <h3>Vous n'avez pas des invitations &#128546;</h3>
                  )}
                </span>
              )}
              {auth.user.notif &&
                auth.user.notif.map((el, i) => (
                  <Link to={`/Matchs/${el}`} key={i}>
                    <h4 className="m-auto text-center"> Match N°:{i + 1}</h4>
                  </Link>
                ))}
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default CardProfil;
