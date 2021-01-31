import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../action/authAction";
const TableUpdate = ({ skils, closeModal }) => {
  const dispatch = useDispatch();
  const { poste, pied_fort, age, adress, phone, _id } = skils;
  const [info, setInfo] = useState({
    poste,
    pied_fort,
    age,
    phone,
    _id,
    adress,
  });
  const user = true;
  const stableDispatch = useCallback(dispatch, []);

  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const handleConfirm = () => {
    stableDispatch(editUser(info));
    setTimeout(() => {
      closeModal();
    }, 1500);
  };
  return (
    <div className="w-100 m-auto">
      {user ? (
        <table className="table">
          <tr>
            <td>Poste</td>
            <td>
              <select
                type="text"
                id="poste"
                value={info.poste}
                onChange={handleInfo}
              >
                <option>--Please choose a Poste--</option>
                <option value="Attaquant">Attaquant </option>
                <option value="Milieu offensif">Milieu offensif </option>
                <option value="milieu défensif">milieu défensif</option>
                <option value="Ailier">Ailier</option>
                <option value="Défenseur">Défenseur</option>
                <option value="Arrière gauche">Arrière gauche</option>
                <option value="Arrière droit">Arrière droit</option>
                <option value="Gardien de bu">Gardien de but</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Pied fort </td>
            <td>
              <select
                type="text"
                id="pied_fort"
                value={info.pied_fort}
                onChange={handleInfo}
              >
                <option>--Please choose a piedFort--</option>
                <option value="Droit">Droit</option>
                <option value="Gauche">Gauche</option>
                <option value="Ambidextre">Ambidextre</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Age</td>
            <td>
              <input
                type="number"
                min="120"
                max="220"
                id="age"
                value={info.age}
                onChange={handleInfo}
              />
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>
              <input
                style={{ width: "190px" }}
                type="number"
                min="20"
                max="250"
                id="phone"
                value={info.phone}
                onChange={handleInfo}
              />
            </td>
          </tr>
          <tr>
            {" "}
            <td>Adress</td>
            <td>
              {" "}
              <input
                type="text"
                min="20"
                max="250"
                id="adress"
                value={info.adress}
                onChange={handleInfo}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {true && (
                <button className="btn btn-success " onClick={handleConfirm}>
                  Confirm
                </button>
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

export default TableUpdate;
