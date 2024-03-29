import { Fade } from "react-awesome-reveal";

import "./SingleProject.css";

export default function SingleProject({photos, title}) {

  return (
    <>
      <section className="single-project_main-container">
        <Fade direction="left" triggerOnce={true}>
          <div className="single-project_text-btn-container">
            <p className="single-project_text-wrapper">
              {title}
            </p>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce={true}>
          <ul className="single-project_images-wrapper">
            {photos.map((photo, index)=>(
              <li key={index}>
                <img src={photo} loading="lazy" alt="xezer-bine-school" />
              </li>
            ))}
          </ul>
        </Fade>
      </section>
      
    </>
  );
}
