import design1 from "./assets/bim-technology0(transparent).jpg";
import design2 from "./assets/bim-technology1(transparent).jpg";
import design3 from "./assets/yevlax-qoyunbinesi-mekteb.jpg";
import "./BIM.css";

export default function BIM() {
  return (
    <>
      <section className="bim-modelling">
        <h1 className="bim-modelling-heading">
          BİM Layihələndirmə/3D modelləşdirmə
        </h1>
        <div className="text-designimgs-container">
          <div>
            <p>
              Sağ tərəfdə Şuşa qalasının 2-ci Qarabağ müharibəsindən sonra 3D
              Scan texnologiyasının tətbiqi ilə əldə olunmuş görüntüləri və bu
              məlumatların əsasında hazırlamnış bərpa modeli əks olunmuşdur
            </p>
            <ul>
              <li>
                BIM texnologiyasının obyektin bütün həyat dövrü ərzində
                idarəetmə elementi kimi tətbiqi
              </li>
              <li>
                Tikinti obyektlərinin məlumat bazasının yaradılması və idarə
                edilməsi
              </li>
              <li>Mürəkkəb obyektlərin layihələndirilməsi</li>
              <li>Layihələrin müəllif və texniki nəzarəti</li>
              <li>Lazer və digər innovativ texnologiyaların tətbiqi</li>
            </ul>
          </div>

          <div className="designimgs-container">
            <img src={design1} alt="BIM-Layihelendirme" />
            <img src={design2} alt="BIM-Layihelendirme" />
          </div>
        </div>

        <div className="text-designimgs-container-1">
          <div className="designimgs-container-1">
            <img src={design3} alt="BIM-Layihelendirme" />
          </div>

          <div>
            <p>
              Yevlax rayonu, Qoyunbinəsi kəndi 432 yerli orta məktəbin BİM
              texnologiyası ilə layihələndirilməsi
            </p>
            <p>BIM texnologiyası ilə işlənilmişdir:</p>
            <ul>
              <li>Memarlıq</li>
              <li>Konstruktiv</li>
              <li>Mühəndislik</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
