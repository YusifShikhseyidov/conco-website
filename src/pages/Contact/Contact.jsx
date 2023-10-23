import "./Contact.css";
import { TbMailOpened } from "react-icons/tb";
import { PiPhoneIncoming } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";

function Contact() {
  return (
    <main className="contact-page">
      <header>
        <h1>Əlaqə</h1>
      </header>
      <section className="contact-details">
        <div className="contact-phone-container">
          <a href="tel:(+994 12) 465 73 07">
            <div className="phone-icon-wrapper">
              <PiPhoneIncoming size={23} />
            </div>
            <span>(+994 12) 465 73 07</span>
          </a>
        </div>

        <div className="contact-email-container">
          <a href="mailto:info@conco.az">
            <div className="email-icon-wrapper">
              <TbMailOpened size={21} />
            </div>
            <span>info@conco.az</span>
          </a>
        </div>
      </section>
      <section className="address-on-map">
        <h3>Conco QSC Ofis</h3>
        <div className="text-address">
          <GrMapLocation size={21} />
          <p>
            AZ1075 Nərimanov rayonu, Əhməd Rəcəbli küç. 2/1 Bakı, Azərbaycan
          </p>
        </div>
        <div className="map-address">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.99865613201!2d49.86158557643959!3d40.40888055611648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d55f483215d%3A0x6579b75be1ed3d12!2zxo9obcmZZCBSyZljyZlibGksIEJha8Sx!5e0!3m2!1sen!2saz!4v1697738710351!5m2!1sen!2saz"
            width="1150"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default Contact;
