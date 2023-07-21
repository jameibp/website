import React from "react";
import Navbar from "../comp/nav/Navbar";
import "./main.css";

function Main({ children }) {
  return (
    <div>
      <Navbar />
      <div className="main-container">{children}</div>
    </div>
  );
}

export default Main;
