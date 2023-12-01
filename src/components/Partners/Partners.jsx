import { Fade, Zoom } from "react-reveal";
import Partner from "./Partner";
import "./Partners.css";
import { ScrollParallax } from 'react-just-parallax';

const imageUrl =
  "https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

export default function Partners() {

  

  return (
    <div className="main-partners-container">
      <h1>Tərəfdaşlarımız</h1>

      <div className="partners-grid">
        <ScrollParallax isAbsolutelyPositioned>
          <div className="partners-grid-inside-box">
              <Fade left>
                <Partner imageUrl={imageUrl} />
              </Fade>
              <Zoom>
                <div className="test" />
              </Zoom>
              <Zoom top>
                <Partner imageUrl={imageUrl} />
              </Zoom>
              <Zoom>
                <div className="test1" />
              </Zoom>
              <Fade right>
                <Partner imageUrl={imageUrl} />
              </Fade>
              <Zoom>
                <div className="test2" />
              </Zoom>
              <Fade left>
                <Partner imageUrl={imageUrl} />
              </Fade>
              <Zoom bottom>
                <Partner imageUrl={imageUrl} />
              </Zoom>
              <Fade right>
                <Partner imageUrl={imageUrl} />
              </Fade>
          </div>
        </ScrollParallax>
      </div>
      
    </div>
  );
}
