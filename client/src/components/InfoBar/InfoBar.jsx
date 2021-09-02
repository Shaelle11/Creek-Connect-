import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="InfoBar">
    <div className="leftInnerContainer">
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src="{closeIcon}" alt="close image" />
      </a>
    </div>
  </div>
);

export default InfoBar;
