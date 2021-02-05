import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../action/authAction";
import { useHistory } from "react-router-dom";
const Admin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserNow);
  const auth = useSelector((state) => state.AuthReducer);

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages(user.msg);
  }, []);
  const filterMsg = (e) => {
    dispatch(editUser({ msg: messages.filter((el) => el.id != e.target.id) }));
    setMessages(messages.filter((el) => el.id != e.target.id));
  };
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="text-primary p-2 rounded  m-auto border shadow text-center">
          Feedback
        </h1>
        <div className="d-flex flex-wrap justify-content-center  vh-100 overflow-auto ">
          {messages.length ? (
            messages.map((el, i) => (
              <div
                key={i}
                className="border m-5 p-2 alert-dark border border-dark shadow "
                style={{
                  minWidth: "300px",
                  borderRadius: "20px",
                  maxHeight: "250px",
                }}
              >
                <p
                  className="font-weight-bold overflow-auto"
                  style={{ margin: "5px" }}
                >
                  {el.email}
                </p>
                <p
                  className="border p-2 font-italic alert-success "
                  style={{
                    margin: "auto",
                    overflow: "auto",
                    height: "130px",
                    maxWidth: "250px",
                    fontSize: "15px",
                    borderRadius: "15px",
                  }}
                >
                  {el.message}
                </p>
                <span className="float-right">
                  <i
                    class="fas fa-times removeMSG"
                    title="remove"
                    id={el.id}
                    onClick={filterMsg}
                  ></i>
                  <a href={`mailto:${el.email}`} title="répondre">
                    <i class="fas fa-reply "></i>
                  </a>
                </span>
              </div>
            ))
          ) : (
            <h1 className="text-danger">Pas des messages</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
