import "./OurValue.css"
import whyUs from "../../../pages/About/assets/our-value-diagram.png"

export default function OurValue() {
  return (
    <section className="about-page_section-4">
          <h1>Niyə Məhz Biz?</h1>

          <div className="our-value-diagram">
            <img src={whyUs} alt="our-value-diagram" />
          </div>
    </section>
  );
}
