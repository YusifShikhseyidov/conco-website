import companyCover from "../../../pages/About/assets/conco-company-cover.png";
import MainServices from "../SectionTwoMainServices/MainServices";
import { mainServices } from "../../../pages/About/services";
import "./AboutConco.css"

// import react-awesome-reveal Zoom effect
import { Zoom } from "react-awesome-reveal";

export default function AboutConco() {
  // define current date using Date object
  const currentDate = new Date().getFullYear();
  const companyFoundationYear = 2015;
  const inIndustryFor = currentDate - companyFoundationYear;

  // define title for main services component
  const title = "Əsas Fəaliyyət İstiqamətləri";
  
  return (
    <section className="about-page_section-1">
      <div className="about-page_company-cover">
        <img src={companyCover} alt="company-cover" />
      </div>
      <div className="about_page-about_us-keeper">
        <h1 className="about-page_title">Haqqımızda</h1>

        <p className="about-page_about-conco">
          <strong>
            <q>CONCO</q> QSC
          </strong>{' '}
          2015-ci ildə qeydiyyatdan keçib. Şirkət artıq {inIndustryFor} ildir ki, əsaslı
          tikinti, bərpa, texniki nəzarət və dizayn işlərində uğurla fəaliyyət
          göstərir. Bu günə kimi Azərbaycanın müxtəlif regionlarında yerləşən,
          müxtəlif təyinatlı obyektlərin təmir-tikinti, bərpa-gücləndirmə işləri
          ilə bağlı sifarişləri qəbul edib, layihələri uğurla sona çatdırıb və
          onları sahiblərinə təhvil vermişdir. Sifarişlərin icra olunması
          prosesində “CONCO” QSC dövlətin qanunlarını, Nazirlər Kabinetinin
          qərarlarını, sağlamlıq, əməyin mühafizəsi, təhlükəsizlik texnikası,
          yanğın təhlükəsizliyi və ətraf mühitin mühafizəsi üzrə
          qanunvericiliyin tələblərini daim rəhbər tutur.
        </p>

        <hr />
        <Zoom>
          <p className="about-page_our-philosophy_1">hədsiz mükəmməllik</p>
        </Zoom>
        <p className="about-page_our-philosophy_2">bizim iş fəlsəfəmizdir</p>
        <hr />

        <MainServices title={title} mainServices={mainServices}/>
      
      </div>

    </section>
  );
}
