import React, { useState } from "react";
import TableUpdate from "./TableUpdate";
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

Modal.setAppElement("#root");

const TableSkills = ({ auth, edit }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-sm-12 col-md-8 col-lg-6 w-75 m-auto">
      <h5 className="text-center">Player Skills </h5>
      {auth.user ? (
        <table className="table">
          <tr>
            <td>Poste</td>
            <td>{auth.user.poste}</td>
          </tr>
          <tr>
            <td>Pied fort </td>
            <td>{auth.user.pied_fort}</td>
          </tr>
          <tr>
            <td>Taille</td>
            <td>{auth.user.taille}</td>
          </tr>
          <tr>
            <td>Poid</td>
            <td>{auth.user.poid}</td>
          </tr>
          <tr>
            <td></td>
            <td>
              {edit && (
                <div>
                  <button className="btn btn-warning " onClick={openModal}>
                    Edit
                  </button>{" "}
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <TableUpdate skils={auth.user} closeModal={closeModal} />
                  </Modal>
                </div>
              )}
            </td>
          </tr>
        </table>
      ) : (
        <h1>wait...</h1>
      )}
    </div>
  );
};

export default TableSkills;
