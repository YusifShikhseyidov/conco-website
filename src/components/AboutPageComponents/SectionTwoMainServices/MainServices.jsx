import { JackInTheBox } from "react-awesome-reveal";
import { mainServices } from "../../../pages/About/services";
import "./MainServices.css"


export default function MainAreasOfWork() {
  return (
    <section className="about-page_section-2">
      <h1>Əsas Fəaliyyət istiqamətləri</h1>

      <div className="about-page_main-services">
        {mainServices.map((service, index) => (
          <JackInTheBox key={index} triggerOnce={true}>
            <div className="service-container">
              <div className="service-logo-container">
                <img src={service.href} alt={service.alt} />
              </div>

              <div className="service-name-container">
                <h3>{service.name.split(" ").length > 2 ? service.name.split(" ").map((namePiece, index) => (
                  <p key={index}>{namePiece}</p>
                )) : service.name}</h3>
              </div>
            </div>
          </JackInTheBox>
        ))}
      </div>
    </section>
  );
}
