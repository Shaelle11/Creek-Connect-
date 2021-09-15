import "../Home/home.scss";
import NavBar from "../../animations/Chat-Interface/NavBar";
import LeftSide from "../../animations/Chat-Interface/LeftSide";
import CenterSide from "../../animations/Chat-Interface/CenterSide";
import RightSide from "../../animations/Chat-Interface/RightSide";

const Home = () => {
  return (
    <article>
      <NavBar />
      <main>
        <section className="left">
          <LeftSide />
        </section>
        <section className="center">
          <CenterSide />
        </section>
        <section className="right">
          <RightSide />
        </section>
      </main>
    </article>
  );
};

export default Home;
