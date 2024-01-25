import "./ImprovementPerspectives.css"
import { JackInTheBox } from "react-awesome-reveal";
import { improvementPerspectives } from "../../../pages/About/services";

export default function ImprovementPerspectives() {

  return (
    <section className="about-page_section-3">
      <h1>Inkişaf üçün perspektiv istiqamətlər</h1>

      <div className="about-page_main-perspectives">
        {improvementPerspectives.map((perspective, index) => (
          <JackInTheBox key={index} triggerOnce={true}>
            <div className="perspective-container">
              <div className="perspective-logo-container">
                <img src={perspective.href} alt={perspective.alt} />
              </div>

              <div className="perspective-name-container">
                <h3>{perspective.name.split(" ").length > 2 && perspective.name.split(" ").length <= 4 ? perspective.name.split(" ").map((namePiece, index) => (
                  <p key={index}>{namePiece}</p>
                )) : perspective.name}</h3>
              </div>
            </div>
          </JackInTheBox>
        ))}
      </div>
    </section>
  );
}
