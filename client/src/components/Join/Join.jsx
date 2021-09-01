import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, SetRoom] = useState("");

  setName(name);
  SetRoom(room);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => SetRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={"/Chat?name=${name}&room=${room}"}
        >
          <button className="button mt-20" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
