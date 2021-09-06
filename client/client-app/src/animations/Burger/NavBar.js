import React, { useState } from "react";
import "../Burger/Styles.scss";
const Burger = () => {
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
          {/* <Search /> */}
          <input placeholder="Search for friends" className="searchInput" />
        </div>
      </div>
      <div className="navBarRight">
        <div className="Settings">
          <span className="settingsIcon">1</span>
        </div>
        <img src="" alt="" className="profileImg" />
      </div>
    </nav>
  );
};

export default Burger;
