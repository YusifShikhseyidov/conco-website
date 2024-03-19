import "./Certificates.css";
import crt1 from "../../../pages/About/assets/AZS-ISO-9001-Sertifikat.png";
import crt2 from "../../../pages/About/assets/AZS-ISO-14001-Sertifikat.png";
import crt3 from "../../../pages/About/assets/AZS-ISO-45001-Sertifikat.png";
import crt4 from "../../../pages/About/assets/AZS-ISO-50001-Sertifikat.png";
import { Fade } from "react-awesome-reveal";

export default function Certificates() {
  return (
    <section className="certificates-section">
      <h2>Sertifikatlarımız</h2>
      <Fade cascade damping={0.2} triggerOnce={true}>
        <ul className="certificates-container">
          <li className="certificate-container">
            <img src={crt1} loading="lazy" alt="certificate" />
          </li>
          <li className="certificate-container">
            <img src={crt2} loading="lazy" alt="certificate" />
          </li>
          <li className="certificate-container">
            <img src={crt3} loading="lazy" alt="certificate" />
          </li>
          <li className="certificate-container">
            <img src={crt4} loading="lazy" alt="certificate" />
          </li>
        </ul>
      </Fade>
    </section>
  );
}
