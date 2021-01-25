import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Load = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.goBack();
    }, 2000);
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Loading...</span>
      </button>
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
};

export default Load;
