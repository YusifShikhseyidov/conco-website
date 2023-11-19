import { useState } from "react";
import {
  projectImage8,
  projectImage9,
  projectImage10,
  projectImage11,
  projectImage12,
  projectImage13,
} from "./projectsImages";
import Fade from "react-reveal/Fade"

export default function OngoingProjects() {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <>
      <header className="op-page-header">
        <h1 className="main-heading">Davam edən layihələr</h1>
      </header>
      <main className="op-page">
        <section className="main-container">
          <Fade left>
            <div className="op-page-text-btn-container">
              <p className="op-page-text-wrapper">
                Lənkəran Peşə Liseyinin Yenidən qurulması
              </p>
              {/* this is a test */}
              <button
                className="btn-more"
                role="button"
                onClick={() => setToggle(!toggle)}
              >
                Layihəyə aid daha çox məlumat üçün klikləyin
              </button>
            </div>
          </Fade>
          
          <Fade right>
            <div className="op-page-images-wrapper">
              <img src={projectImage8} alt="lankaran-pese-college" />
              <img src={projectImage9} alt="lankaran-pese-college" />
              <img src={projectImage10} alt="lankaran-pese-college" />
            </div>
          </Fade>
        </section>
        {/* this is a test */}
        {toggle && <div className="op-page-imgs-box"></div>}

        <section className="main-container2">
          <div className="op-page-images-wrapper2">
            <img src={projectImage11} alt="shaki-baltali-village-school" />
            <img src={projectImage12} alt="shaki-baltali-village-school" />
            <img src={projectImage13} alt="shaki-baltali-village-school" />
          </div>

          <div className="op-page-text-btn-container2">
            <p className="op-page-text-wrapper2">
              Bakı şəhəri, Suraxanı rayonu, Hövsan qəsəbəsinin 23,25 ha
              ərazisində MIDA yaşayış kompleksi tərkibində olan 4 ədəd
              9-mərtəbəli və 2 ədəd 12-mərtəbəli yeni yaşayış binaların inşası
            </p>
            {/* this is a test */}
            <button
              className="btn-more"
              role="button"
              onClick={() => setToggle1(!toggle1)}
            >
              Layihəyə aid daha çox məlumat üçün klikləyin
            </button>
          </div>
        </section>
        {/* this is a test */}
        {toggle1 && <div className="op-page-imgs-box"></div>}

        <section className="main-container3">
          <div className="op-page-text-btn-container3">
            <p className="op-page-text-wrapper3">
              “MİDA” MMC-nin sifarişi ilə Sumqayıt şəhəri, M.Hüseynzadə adına
              şəhər stadionunun şimal şərqində çoxmənzilli yaşayış binaların
              tikintisi
            </p>
            {/* this is a test */}
            <button
              className="btn-more"
              role="button"
              onClick={() => setToggle2(!toggle2)}
            >
              Layihəyə aid daha çox məlumat üçün klikləyin
            </button>
          </div>

          <div className="op-page-images-wrapper3">
            <img src={projectImage8} alt="yasamal-living-complexes" />
            <img src={projectImage9} alt="yasamal-living-complexes" />
            <img src={projectImage10} alt="yasamal-living-complexes" />
          </div>
        </section>
        {/* this is a test */}
        {toggle2 && <div className="op-page-imgs-box"></div>}
      </main>
      <footer className="op-page-footer">
        <p>CONCO CONSTRUCTION QSC</p>
      </footer>
    </>
  );
}
