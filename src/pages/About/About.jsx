// import about page styles
import "./About.css";

import { Outlet } from "react-router-dom";

// import components
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <main className="about-page">
        <Outlet/>
        <hr className="line-separator" />
      </main>
      <Footer />
    </>
  );
}

export default About;
