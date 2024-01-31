import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import ShowMoreBtn from "../ShowMoreBtn/ShowMoreBtn";

import "./SingleProject.css";

export default function SingleProject({photos, title}) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section className="single-project_main-container">
        <Fade direction="left" triggerOnce={true}>
          <div className="single-project_text-btn-container">
            <p className="single-project_text-wrapper">
              {title}
            </p>
            {/* this is a test */}
            <ShowMoreBtn toggle={toggle} setToggle={setToggle} />
          </div>
        </Fade>

        <Fade direction="right" triggerOnce={true}>
          <ul className="single-project_images-wrapper">
            {photos.map((photo, index)=>(
              <li key={index}>
                <img src={photo} alt="xezer-bine-school" />
              </li>
            ))}
          </ul>
        </Fade>
      </section>
      {/* this is a test */}
      {toggle && (
        <p className="single-project_extra-content-box">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
          deserunt cum vel veniam omnis quam soluta, hic aliquid atque saepe
          voluptatibus optio harum magni ullam nihil dolores praesentium, vitae
          repellat! Ducimus veritatis, ratione consectetur architecto molestiae
          doloremque, totam officiis, rem sit reprehenderit quisquam. Ex numquam
          voluptatem quaerat minima, voluptatum quod esse facere molestias
          consequatur. Accusamus eaque illo maxime obcaecati explicabo. Tempore
          dolores accusamus voluptate quam quia officiis animi tenetur cumque
          harum eveniet facilis omnis aliquid possimus, assumenda cupiditate
          blanditiis nihil numquam, non atque voluptas! Facere qui quas nemo
          laborum officiis. Tempora officiis beatae rerum tenetur quasi nobis
          itaque tempore est rem modi, quia, dolor ad suscipit ipsum quis fugiat
          repellat perspiciatis porro totam eos sint vitae eligendi voluptate.
          Aliquid, neque! Ipsum expedita corporis officiis ullam cumque minima
          adipisci alias, voluptate dolorum accusamus debitis laudantium ipsam
          id excepturi mollitia nostrum quibusdam esse error voluptates
          repellendus veritatis facilis quod sunt aliquam! Accusamus?
        </p>
      )}
    </>
  );
}
