import companyCover from "../../../pages/About/assets/conco-company-cover.png";
import "./AboutConco.css"

export default function AboutConco() {
  return (
    <section className="about-page_section-1">
      <div>
        <img src={companyCover} alt="company-cover" />
      </div>
      <div className="about_page-about_us-keeper">
        <h1 className="about-page_title">Haqqımızda</h1>

        <p className="about-page_about-conco">
          <strong>
            <q>CONCO</q> QSC
          </strong>{' '}
          2015-ci ildə qeydiyyatdan keçib. Şirkət artıq 8 ildir ki, əsaslı
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

        <h1 className="about-page_our-philosophy_1">hədsiz mükəmməllik</h1>
        <p className="about-page_our-philosophy_2">bizim iş fəlsəfəmizdir</p>
      </div>
    </section>
  );
}
