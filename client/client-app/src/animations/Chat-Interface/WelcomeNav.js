import React from "react";
import { useHistory } from "react-router-dom";
import "../StyleInterface/WelcomeNav.scss";
const WelcomeNav = (props) => {
  const history = useHistory();
  return (
    <div>
      <nav>
        <section className="logo">Logo</section>
        <ul>
          <li>
            <button onClick={() => history.push("Login")}>Login</button>
          </li>
          <li>
            <button onClick={() => history.push("/SignUp")}>SignUp</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default WelcomeNav;
