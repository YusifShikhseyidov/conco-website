import "./Partners.css";
import Fade from "react-reveal/Fade";
import maxi from "./assets/maxiaz.png";

export default function Partners() {
  return (
    <div className="main-partners-container">
      <h1>Tərəfdaşlarımız</h1>

      <div className="main-partners-contaner_first-partner">
        <div className="left-part">
          <Fade left>
            <img width={500} height={500} src={maxi} alt="maxi.az" />
          </Fade>
        </div>
        <div className="right-part">
          <Fade right>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
              reprehenderit earum odio sit laudantium asperiores officiis
              consectetur neque nostrum laborum modi aspernatur? Soluta dolorum
              repellendus, qui minus aperiam quisquam sunt!
            </p>
          </Fade>
        </div>
      </div>
      <div className="main-partners-contaner_second-partner">
        <div className="left-part">
          <Fade left>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
              reprehenderit earum odio sit laudantium asperiores officiis
              consectetur neque nostrum laborum modi aspernatur? Soluta dolorum
              repellendus, qui minus aperiam quisquam sunt!
            </p>
          </Fade>
        </div>
        <div className="right-part">
          <Fade right>
            <img width={500} height={500} src={maxi} alt="maxi.az" />
          </Fade>
        </div>
      </div>
    </div>
  );
}
