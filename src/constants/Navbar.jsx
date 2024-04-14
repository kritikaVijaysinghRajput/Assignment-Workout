import React from "react";
import StatusBar from "../assets/StatusBar.png";

const Navbar = () => {
  return (
    <div className="navbar p-3 flex justify-between items-center">
      <div className="time font-bold "> 9:14</div>
      <div className="status ">
        <img src={StatusBar} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
