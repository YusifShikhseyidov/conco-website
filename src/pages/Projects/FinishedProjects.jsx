import { useState } from "react";
import { projectImage1, projectImage2, projectImage3, projectImage4, projectImage5, projectImage6, projectImage7 } from "./projectsImages";
// U can use react-spring library for smooth transition appear and diisappear of the divs for extra photos example of which is at codesandbox.io

export default function FinishedProjects() {

  const [toggle, setToggle] = useState(false)
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)

  return (
    <>
      <header className="fp-page-header">
        <h1 className="main-heading">Təhvil verilmiş layihələr</h1>
      </header>
      <main className="fp-page">
        <section className="main-container">
          <div className="fp-page-text-btn-container">
            <p className="fp-page-text-wrapper">
              Xəzər rayonu Binə qəsəbəsinin ərazisində tikilən 1600 şagird yerlik
              məktəb
            </p>
            {/* this is a test */}
            <button className="btn-more" role="button" onClick={()=> setToggle(!toggle)}>Layihəyə aid daha çox məlumat üçün klikləyin</button> 
          </div>

          <div className="fp-page-images-wrapper">
            <img src={projectImage1} alt="xezer-bine-school" />
            <img src={projectImage2} alt="xezer-bine-school" />
            <img src={projectImage3} alt="xezer-bine-school" />
          </div>
        </section>
        {/* this is a test */}
        {toggle && (
          <div className="fp-page-imgs-box"></div>
        )}

        <section className="main-container2">
          <div className="fp-page-images-wrapper2">
            <img src={projectImage4} alt="shaki-baltali-village-school" />
            <img src={projectImage5} alt="shaki-baltali-village-school" />
          </div>

          <div className="fp-page-text-btn-container2">
            <p className="fp-page-text-wrapper2">
              Şəki ş. Baltalı kəndində tam orta məktəb
            </p>
            {/* this is a test */}
            <button className="btn-more" role="button" onClick={()=> setToggle1(!toggle1)}>Layihəyə aid daha çox məlumat üçün klikləyin</button> 
          </div>          
        </section>
        {/* this is a test */}
        {toggle1 && (
          <div className="fp-page-imgs-box"></div>
        )}

        <section className="main-container3">

          <div className="fp-page-text-btn-container3">
            <p className="fp-page-text-wrapper3">
              “MİDA” MMC-nin sifarişi ilə Yasamal yaşayış komplekslərində 9 və
              12 mərtəbəli binaların inşa edilməsi
            </p>
              {/* this is a test */}
            <button className="btn-more" role="button" onClick={()=> setToggle2(!toggle2)}>Layihəyə aid daha çox məlumat üçün klikləyin</button> 
          </div>

          <div className="fp-page-images-wrapper3">
            <img src={projectImage6} alt="yasamal-living-complexes" />
            <img src={projectImage7} alt="yasamal-living-complexes" />
            <img src={projectImage7} alt="yasamal-living-complexes" />
          </div>
        </section>
        {/* this is a test */}
        {toggle2 && (
          <div className="fp-page-imgs-box"></div>
        )}
      </main>
      <footer className="fp-page-footer">
        <p>CONCO CONSTRUCTION QSC</p>
      </footer>
    </>
  );
}
