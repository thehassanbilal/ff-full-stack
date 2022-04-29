/** @format */

import React from "react";
import img from "../assets/graphs.svg";

export default function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <img src={img} style={{ width: "30%" }} />
      <h3 style={{ paddingTop: "18px" }}>Hello, nice to see you!</h3>
    </div>
  );
}
