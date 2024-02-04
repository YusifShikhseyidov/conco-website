import { JackInTheBox } from "react-awesome-reveal";
import "./MainServices.css"


export default function MainServices({title, mainServices}) {
  return (
    <section className="about-page_section-2">
      <h2>{title}</h2>

      <div className="about-page_main-services">
        {mainServices.map((service, index) => (
          <JackInTheBox key={index} triggerOnce={true}>
            <div className="service-container">
              <div className="service-logo-container">
                <img src={service.href} alt={service.alt} />
              </div>

              <div className="service-name-container">
                <h3>{service.name}</h3>
              </div>
            </div>
          </JackInTheBox>
        ))}
      </div>
    </section>
  );
}
