import React from "react";
import logo from "../../../assets/logo.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <li className="loading-container">
      <img src={logo} className="loading-logo" alt="logo" />
    </li>
  );
};

export default Loading;
