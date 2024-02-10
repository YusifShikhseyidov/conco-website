import "./OurValue.css"
import {ourValues} from "./ourValues"
import { JackInTheBox } from "react-awesome-reveal";

export default function OurValue() {
  const title = "NIYƏ MƏHZ BIZ?!"

  return (
    <div style={{marginTop: "4rem"}}>
      <section className="about-page_section-4">
      <h2>{title}</h2>

      <div className="about-page_our-value">
        {ourValues.map((value, index) => (
          <JackInTheBox key={index} triggerOnce={true}>
            <div className="our-value-container">
              <div className="our-value-logo-container">
                <img src={value.href} alt={value.alt} />
              </div>

              <div className="our-value-name-container">
                <h3>{value.name}</h3>
              </div>
            </div>
          </JackInTheBox>
        ))}
      </div>
    </section>
    </div>
  );
}
