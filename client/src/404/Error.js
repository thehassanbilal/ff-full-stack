/** @format */

import React from "react";
import error from "../assets/404.svg";

function Error() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      <img src={error} alt="not found" style={{ width: "40%" }} />
    </div>
  );
}

export default Error;
