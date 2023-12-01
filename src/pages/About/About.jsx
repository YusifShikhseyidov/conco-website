// import section-2 service names and images
import { services } from "./services";
// import section-3 images
import qualityAssuranceImages from './qualityImages'
// import about page styles
import "./About.css";
// import Accordion component
import Accordion from '../../components/Accordion/Acccordion'

import Footer from "../../components/Footer/Footer";
import { Flip } from "react-reveal";

function About() {
  return (
    <>
    <main className="about-page">
      <section className="about-page_section-1">
        <h1 className="about-page_title">Haqqımızda</h1>

        <p className="about-page_about-conco">
          <strong>“CONCO” QSC</strong>-nin əsas fəaliyyəti əsaslı tikinti, təmir, bərpa, texniki
          nəzarət və dizayn işləridir. Şirkət çox sayda müxtəlif istiqamətli
          təmir-tikinti, bərpa -gücləndirmə və dizayn işlərinin sifarişini qəbul
          etmiş, layihələri uğurla sona çatdırmış və müştəri məmnuniyyəti ilə
          sahiblərinə təhvil vermişdir.
        </p>
      </section>

      <hr className="new1" />

      <section className="about-page_section-2">
        <h1>Əsas Fəaliyyət istiqamətləri</h1>

        <div className="about-page_main-services">
          {services.map((service) => (
            <Flip key={service.alt} left>
              <div className="service-container">
                <div className="service-logo-container">
                  <img src={service.href} alt={service.alt} />
                </div>

                <div className="service-name-container">
                  <h3>{service.name}</h3>
                </div>
              </div>
            </Flip>
          ))}
        </div>
      </section>


      <section className="about-page_section-3">
        <div className="flex-container">
          <div className="text-container">
            <h1>CONCO, Keyfiyyətin ünvanı</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis
              obcaecati dolores! Distinctio ea possimus ullam, qui quod ad iure
              doloribus consequuntur ab pariatur necessitatibus inventore velit rem
              corporis molestias sed dolorum excepturi non accusamus dolore aperiam
              deleniti magni. Voluptas laboriosam fuga quae magnam? Aperiam dolor
              harum culpa quisquam odit.
            </p>
          </div>
          <div className="images-container">
            {qualityAssuranceImages.map((image, index) => (
              <div className="qualityAssuranceImage-container" key={index}>
                <img src={image} alt={`qualityAssuranceImage-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page_section-4 priorities">
        <Accordion/>
      </section>

    </main>
    <Footer/>
    </>
  );
}

export default About;
