import { projectImage1, projectImage2, projectImage3 } from "./projectsImages";

export default function FinishedProjects() {
  return (
    <>
      <header className="fp-page-header">
        <h1 className="main-heading">Təhvil verilmiş layihələr</h1>
      </header>
      <main className="fp-page">
        <section className="main-container">
          <p className="fp-page-text-wrapper">
            Xəzər rayonu Binə qəsəbəsinin ərazisində tikilən 1600 şagird yerlik
            məktəb
          </p>

          <div className="fp-page-images-wrapper">
            <img src={projectImage1} alt="xezer-bine-school" />
            <img src={projectImage2} alt="xezer-bine-school" />
            <img src={projectImage3} alt="xezer-bine-school" />
          </div>
        </section>

        <section className="main-container2">
          <div className="fp-page-images-wrapper2">
            <img src={projectImage1} alt="xezer-bine-school" />
            <img src={projectImage2} alt="xezer-bine-school" />
            <img src={projectImage3} alt="xezer-bine-school" />
          </div>

          <p className="fp-page-text-wrapper2">
            Şəki ş. Baltalı kəndində tam orta məktəb
          </p>
        </section>

        <section className="main-container3">
          <div className="fp-page-text-wrapper3-container">
            <p className="fp-page-text-wrapper3">
              “MİDA” MMC-nin sifarişi ilə Yasamal yaşayış komplekslərində 9 və
              12 mərtəbəli binaların inşa edilməsi
            </p>
          </div>

          <div className="fp-page-images-wrapper3">
            <img src={projectImage1} alt="xezer-bine-school" />
            <img src={projectImage2} alt="xezer-bine-school" />
            <img src={projectImage3} alt="xezer-bine-school" />
          </div>
        </section>
      </main>
      <footer className="fp-page-footer">
        <p>CONCO CONSTRUCTION QSC</p>
      </footer>
    </>
  );
}
