import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Footer from "../../components/Footer/Footer";
import {
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
} from "./projectsImages";
// U can use react-spring library for smooth transition appear and diisappear of the divs for extra photos example of which is at codesandbox.io

export default function FinishedProjects() {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);

  return (
    <>
      <header className="fp-page-header">
        <h1 className="main-heading">Təhvil verilmiş layihələr</h1>
      </header>
      <main className="fp-page">
        <section className="main-container">
          <Fade direction="left" triggerOnce={true}>
            <div className="fp-page-text-btn-container">
              <p className="fp-page-text-wrapper">
                Xəzər rayonu Binə qəsəbəsinin ərazisində tikilən 1600 şagird
                yerlik məktəb
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

          <Fade direction="right" triggerOnce={true}>
            <div className="fp-page-images-wrapper">
              <div>
                <img src={projectImage1} alt="xezer-bine-school" />
              </div>
              <div>
                <img src={projectImage2} alt="xezer-bine-school" />
              </div>
              <div>
                <img src={projectImage3} alt="xezer-bine-school" />
              </div>
            </div>
          </Fade>
        </section>
        {/* this is a test */}
        {toggle && (
          <div className="fp-page-imgs-box">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, deserunt cum vel veniam omnis quam soluta, hic aliquid
            atque saepe voluptatibus optio harum magni ullam nihil dolores
            praesentium, vitae repellat! Ducimus veritatis, ratione consectetur
            architecto molestiae doloremque, totam officiis, rem sit
            reprehenderit quisquam. Ex numquam voluptatem quaerat minima,
            voluptatum quod esse facere molestias consequatur. Accusamus eaque
            illo maxime obcaecati explicabo. Tempore dolores accusamus voluptate
            quam quia officiis animi tenetur cumque harum eveniet facilis omnis
            aliquid possimus, assumenda cupiditate blanditiis nihil numquam, non
            atque voluptas! Facere qui quas nemo laborum officiis. Tempora
            officiis beatae rerum tenetur quasi nobis itaque tempore est rem
            modi, quia, dolor ad suscipit ipsum quis fugiat repellat
            perspiciatis porro totam eos sint vitae eligendi voluptate. Aliquid,
            neque! Ipsum expedita corporis officiis ullam cumque minima adipisci
            alias, voluptate dolorum accusamus debitis laudantium ipsam id
            excepturi mollitia nostrum quibusdam esse error voluptates
            repellendus veritatis facilis quod sunt aliquam! Accusamus?
            <img src={projectImage5} alt="xezer-bine-school" />
          </div>
        )}

        <section className="main-container2">
          <Fade direction="right" triggerOnce={true}>
            <div className="fp-page-text-btn-container2">
              <p className="fp-page-text-wrapper2">
                Şəki ş. Baltalı kəndində tam orta məktəb
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
          <Fade direction="left" triggerOnce={true}>
            <div className="fp-page-images-wrapper2">
              <div>
                <img src={projectImage4} alt="xezer-bine-school" />
              </div>
              <div>
                <img src={projectImage5} alt="xezer-bine-school" />
              </div>
            </div>
          </Fade>
        </section>
        {/* this is a test */}
        {toggle1 && (
          <div className="fp-page-imgs-box">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, deserunt cum vel veniam omnis quam soluta, hic aliquid
            atque saepe voluptatibus optio harum magni ullam nihil dolores
            praesentium, vitae repellat! Ducimus veritatis, ratione consectetur
            architecto molestiae doloremque, totam officiis, rem sit
            reprehenderit quisquam. Ex numquam voluptatem quaerat minima,
            voluptatum quod esse facere molestias consequatur. Accusamus eaque
            illo maxime obcaecati explicabo. Tempore dolores accusamus voluptate
            quam quia officiis animi tenetur cumque harum eveniet facilis omnis
            aliquid possimus, assumenda cupiditate blanditiis nihil numquam, non
            atque voluptas! Facere qui quas nemo laborum officiis. Tempora
            officiis beatae rerum tenetur quasi nobis itaque tempore est rem
            modi, quia, dolor ad suscipit ipsum quis fugiat repellat
            perspiciatis porro totam eos sint vitae eligendi voluptate. Aliquid,
            neque! Ipsum expedita corporis officiis ullam cumque minima adipisci
            alias, voluptate dolorum accusamus debitis laudantium ipsam id
            excepturi mollitia nostrum quibusdam esse error voluptates
            repellendus veritatis facilis quod sunt aliquam! Accusamus?
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
