import "./Certificates.css"
import crt1 from "../../../pages/About/assets/AZS-İSO-9001-Sertifikat.png"
import crt2 from "../../../pages/About/assets/AZS-İSO-14001-Sertifikat.png"
import crt3 from "../../../pages/About/assets/AZS-İSO-45001-Sertifikat.png"
import crt4 from "../../../pages/About/assets/AZS-İSO-50001-Sertifikat.png"

export default function Certificates() {
  return (
    <section className="certificates-section">
      <h2>Sertifikatlarımız</h2>
      <div className="certificates-container">
        <div className="certificate-container">
          <img src={crt1} alt="certificate" />
        </div>
        <div className="certificate-container">
          <img src={crt2} alt="certificate" />
        </div>
        <div className="certificate-container">
          <img src={crt3} alt="certificate" />
        </div>
        <div className="certificate-container">
          <img src={crt4} alt="certificate" />
        </div>
      </div>
    </section>
  )
}
