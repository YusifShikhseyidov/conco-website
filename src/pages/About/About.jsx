// import about page styles
import "./About.css";

import AboutConco from "../../components/AboutPageComponents/SectionOneAboutConco/AboutConco";
import MainAreasOfWork from "../../components/AboutPageComponents/SectionTwoMainServices/MainServices";
import ImprovementPerspectives from "../../components/AboutPageComponents/SectionThreeImprovementPerspectives/ImprovementPerspectives";
import OurValue from "../../components/AboutPageComponents/SectionFourOurValue/OurValue";
import Certificates from "../../components/AboutPageComponents/SectionFiveCertificates/Certificates";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <main className="about-page">
        <AboutConco/>

        <hr className="new1" />

        <MainAreasOfWork/>

        <div style={{margin: "8rem 0"}}>
          <ImprovementPerspectives/>
        </div>

        <OurValue/>

        <div style={{margin: "8rem 0"}}>
          <Certificates/>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
