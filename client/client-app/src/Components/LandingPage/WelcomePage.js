import React from "react";
import "../LandingPage/WelcomePage.scss";

import WelcomeNav from "../../animations/Chat-Interface/WelcomeNav";

const WelcomePage = () => {
  return (
    <div>
      <WelcomeNav />
      <main className="welcome">
        <section className="body">
          <div className="body-right">
            <section>
              <h3>Lorem, ipsum.</h3>
            </section>
            <section>
              <h4>Lorem ipsum dolor sit amet.</h4>
            </section>
          </div>
          <div className="body-left">
            <h1>Picture</h1>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WelcomePage;
