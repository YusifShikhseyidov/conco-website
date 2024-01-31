import "./OurValue.css"
import whyUs from "../../../pages/About/assets/Our-Value-Diagram.png"

export default function OurValue() {
  const currentDate = new Date().getFullYear();
  const companyFoundationYear = 2015;
  const inIndustryFor = currentDate - companyFoundationYear;

  return (
    <section className="about-page_section-4">
          <h1>Niyə Məhz Biz?</h1>

          <div className="our-value-diagram">
            <img src={whyUs} alt="our-value-diagram" />
            <span>Sənayedə {inIndustryFor} illik <br/>təcrübə</span>
          </div>
    </section>
  );
}
