import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMyMatchs } from "../action/matchAction";
import Modal from "react-modal";
import { editUser } from "../action/authAction";
import "./components.css";
import axios from "axios";
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

  const [file, setFile] = useState(null);
  const [btnName, setBtnName] = useState("....");

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const stableDispatch = useCallback(dispatch, []);

  const history = useHistory();

  const img = document.getElementById("imgAva");
  const camera = document.querySelector(".kiki");
  const inputAvatar = document.querySelector("#avatar");
  img && (img.onmouseover = () => camera.classList.add("noVis"));
  img && (img.onmouseout = () => camera.classList.remove("noVis"));
  camera &&
    (camera.onmouseover = () => {
      camera.classList.add("noVis");
      camera.style.cursor = "pointer";
    });
  img && (camera.onmouseout = () => camera.classList.remove("noVis"));
  inputAvatar &&
    (inputAvatar.onchange = (e) => {
      e.target.files[0] && setBtnName("Ajouter :" + e.target.files[0].name);
    });

  const selectImage = (e) => {
    setFile(e.target.files[0]);
  };
  // update image
  const imageUpdate = () => {
    let formData = new FormData();
    formData.append("avatar", file);
    axios.post("/img", formData).then((res) => {
      stableDispatch(editUser({ avatar: res.data.imageName }));
      setBtnName("...");
    });
  };

  return (
    <div
      className=" text-center col-sm-12 col-md-6 col-lg-6 m-auto "
      style={{ width: "15rem" }}
    >
      <div className="position-relative bdr">
        <img
          id="imgAva"
          src={auth.user && auth.user.avatar}
          className="border border-success m-auto"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
          alt="..."
        />
        <span className="position-absolute  kiki bg bg-light ">
          <input
            type="file"
            className="form-control"
            placeholder="password"
            onChange={selectImage}
            name="avatar"
            id="avatar"
            style={{ display: "none" }}
          />
          <label htmlFor="avatar">
            <i
              className="fas fa-camera-retro cami"
              style={{ cursor: "pointer" }}
            ></i>
          </label>
          &nbsp;
          <button
            id="imageName"
            onClick={imageUpdate}
            className="badge badge-warning"
          >
            {btnName}
          </button>
        </span>
      </div>

      <div className="card-body">
        <h5 className="card-title">
          {auth.user ? (
            <>
              <i className="fas fa-signature"></i>
              {auth.user.name &&
                auth.user.name.charAt(0).toUpperCase() +
                  auth.user.name.slice(1)}
            </>
          ) : (
            <>wait ...</>
          )}
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
          title="Voire votre match"
        >
          <i class="fas fa-info-circle"></i> Votre match
        </Link>
        <button
          onClick={() => {
            stableDispatch(deleteMyMatchs());
            alert("Your match is deleted");
            history.push("/load");
          }}
          className="btn btn-danger m-1"
          title="Annuler votre match"
        >
          <i class="fas fa-window-close"></i> votre match
        </button>
      </div>
      <div>
        <button
          onClick={openModal}
          className="btn btn-outline-info m-1"
          title="Les invitations pour regoindre un match"
        >
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
