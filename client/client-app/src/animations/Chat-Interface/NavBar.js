import React, { useState } from "react";
//import { faSearch } from "react-icons";
import "../StyleInterface/NavBar.scss";
const NavBar = () => {
  const [status, setStatus] = useState("close");

  return (
    <nav>
      <div className="navBarLeft">
        <div
          className="Burger-Container"
          role="button"
          onClick={() => setStatus(status === "close" ? "open" : "close")}
        >
          <i className={status}> </i>
          <i className={status}></i>
          <i className={status}> </i>
        </div>
      </div>
      <div className="navBarCenter">
        <div className="searchBar">
          {/* {faSearch} */}
          <input placeholder="Search..." className="searchInput" />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarRightLinks">
          <div className="Settings">
            <span className="settingsIcon"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
