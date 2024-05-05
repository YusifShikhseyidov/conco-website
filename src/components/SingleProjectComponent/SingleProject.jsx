import { Fade } from "react-awesome-reveal";

import { TbZoomPan } from "react-icons/tb";

import "./SingleProject.css";

export default function SingleProject({photos, title}) {

  return (
    <>
      <section className="single-project_main-container">
        <Fade direction="left" triggerOnce={true}>
          <div className="single-project_text-container">
            <p className="single-project_text-element">
              {title}
            </p>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce={true}>
          <div className="singleImageWrapper">
            <img src={photos[0]} loading="lazy" alt={photos[0]} />
            <div className="magnifier-wrapper">
              <TbZoomPan className="magnifier-icon" />
            </div>
          </div>
          {/* tomorrow start by adding modal from mui */}
          {/* <ul className="single-project_images-wrapper">
            {photos.map((photo, index)=>(
              <li key={index}>
                <img src={photo} loading="lazy" alt={photo} />
              </li>
            ))}
          </ul> */}
        </Fade>
      </section>
      
    </>
  );
}
