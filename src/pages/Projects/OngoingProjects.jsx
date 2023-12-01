import { useState } from "react";
import {
  projectImage8,
  projectImage9,
  projectImage10,
  projectImage11,
  projectImage12,
  projectImage13,
  projectImage14,
  projectImage15,
  projectImage16,
  projectImage17,
  projectImage18,
  projectImage19,
  projectImage20,
  projectImage21,
  projectImage22,
} from "./projectsImages";
import Fade from "react-reveal/Fade";
import Footer from "../../components/Footer/Footer";

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
          <Fade left>
            <div className="op-page-images-wrapper2">
              <img src={projectImage11} alt="hovsan-project" />
              <img src={projectImage12} alt="hovsan-project" />
              <img src={projectImage13} alt="hovsan-project" />
            </div>
          </Fade>

          <Fade right>
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
          </Fade>
        </section>
        {/* this is a test */}
        {toggle1 && <div className="op-page-imgs-box"></div>}

        <section className="main-container3">
          <Fade left>
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
          </Fade>

          <Fade right>
            <div className="op-page-images-wrapper3">
              <img src={projectImage14} alt="midammc-project" />
              <img src={projectImage15} alt="midammc-project" />
              <img src={projectImage16} alt="midammc-project" />
            </div>
          </Fade>
        </section>
        {/* this is a test */}
        {toggle2 && <div className="op-page-imgs-box"></div>}

        <section className="main-container4">
          <Fade right>
            <div className="op-page-images-wrapper4">
              <img src={projectImage17} alt="shusha-living-sites" />
              <img src={projectImage18} alt="shusha-living-sites" />
              <img src={projectImage19} alt="shusha-living-sites" />
            </div>
          </Fade>

          <Fade left>
            <div className="op-page-text-btn-container4">
              <p className="op-page-text-wrapper4">
                Şuşa şəhərində, Cənub yaşayış zonasında yaşayış binalarının
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
          </Fade>
        </section>
        {/* this is a test */}
        {toggle2 && <div className="op-page-imgs-box"></div>}

        <section className="main-container5">
          <Fade left>
            <div className="op-page-text-btn-container5">
              <p className="op-page-text-wrapper5">
                Azərbaycan Respublikasının Əmək və Əhalinin Sosial Müdafiəsi
                Nazirliyinin tabeliyində Dayanıqlı və Operativ Sosial Təminat
                Agentliyi Quba DOST və Peşə Hazırlığı Mərkəzlərinin tikintisi
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
          </Fade>

          <Fade right>
            <div className="op-page-images-wrapper5">
              <img src={projectImage20} alt="Quba-Dost-merkezi" />
              <img src={projectImage21} alt="Quba-Dost-merkezi" />
              <img src={projectImage22} alt="Quba-Dost-merkezi" />
            </div>
          </Fade>
        </section>
        {/* this is a test */}
        {toggle2 && <div className="op-page-imgs-box"></div>}
      </main>
      <Footer />
    </>
  );
}
