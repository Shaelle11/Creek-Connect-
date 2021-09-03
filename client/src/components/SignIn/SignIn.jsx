import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, SetRoom] = useState("");

  return (
    <div className="signOuterContainer">
      <div className="signInnerContainer">
        <h1 className="heading">Sign In</h1>
        <div>
          <input
            placeholder="Name"
            className="signInput"
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
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`Chat ? name=${name}& room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}
