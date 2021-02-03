import React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const user = useSelector((state) => state.UserNow);
  console.log(user);
  return (
    <div className="row">
      {user &&
        user.msg.map((el, i) => (
          <div key={i} className="border col-4" style={{ maxWidth: "150px" }}>
            <h5>{el.email}</h5>
            <p>{el.message}</p>
            <a href={`mailto:${el.email}`}>
              <button className="badge badge-info">
                <i class="fas fa-reply"></i>
              </button>
            </a>
          </div>
        ))}
    </div>
  );
};

export default Admin;
