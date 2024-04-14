import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Searchicon,
  cameraicon,
  homeicon,
  profileicon,
  workicon,
} from "../assets";

const Taskbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/workout-tracker");
  };
  const handleOnClick = () => {
    navigate("/signin");
  };
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "20px",
        borderTop: "1px solid #e0e0e0",
        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        onClick={handleClick}
        src={homeicon}
        alt="Home Icon"
        style={{ width: "24px", height: "24px" }}
      />

      <img
        src={workicon}
        alt="Work Icon"
        style={{ width: "24px", height: "24px" }}
      />

      <img
        src={cameraicon}
        alt="Camera Icon"
        style={{ width: "24px", height: "24px" }}
      />

      <img
        onClick={handleOnClick}
        src={profileicon}
        alt="Profile Icon"
        style={{ width: "24px", height: "24px" }}
      />
    </div>
  );
};

export default Taskbar;
