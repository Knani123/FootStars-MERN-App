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
            <td>
              <i className="fas fa-puzzle-piece"> </i> Poste
            </td>
            <td>{auth.user.poste}</td>
          </tr>
          <tr>
            <td>
              <i className="fas fa-dumbbell"></i> Pied fort{" "}
            </td>
            <td>{auth.user.pied_fort}</td>
          </tr>
          <tr>
            <td>
              <i className="fas fa-birthday-cake"></i> Age
            </td>
            <td>{auth.user.age}</td>
          </tr>
          <tr>
            <td>
              <i className="fas fa-mobile-alt"></i> Phone
            </td>
            <td>{auth.user.phone}</td>
          </tr>
          <tr>
            <td>
              <i className="fas fa-map-marker-alt"></i> Adress
            </td>
            <td>{auth.user.adress}</td>
          </tr>
          <tr>
            <td></td>
            <td>
              {edit && (
                <div>
                  <button className="btn btn-warning " onClick={openModal}>
                    Modifier
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
