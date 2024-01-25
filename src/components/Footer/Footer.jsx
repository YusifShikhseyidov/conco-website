import "./Footer.css";
import jpgimage from "./company-slogan.jpg";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="info-box">
        <span>
          AZ1075 Nərimanov rayonu, Əhməd Rəcəbli küç. 2/1 Bakı, Azərbaycan
        </span>
        <span>Copyright © 2023 "CONCO QSC"</span>
      </div>

      <div className="footer-img-2">
        <img src={jpgimage} alt="company-symbol" />
      </div>
    </footer>
  );
}
