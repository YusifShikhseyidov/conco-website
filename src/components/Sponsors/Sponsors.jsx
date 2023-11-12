import Marquee from "react-fast-marquee";
import img1 from './assets/sifarisci-1(transparent).jpg'
import img2 from './assets/sifarisci-2-(transparent).jpg'
import img3 from './assets/sifarisci-3-(transparent).jpg'
import img4 from './assets/sifarisci-4-(transparent).jpg'
import img5 from './assets/sifarisci-5-(transparent).jpg'
import img6 from './assets/sifarisci-6.jpg'
import img7 from './assets/sifarisci-7.jpg'
import img8 from './assets/sifarisci-8-(transparent).jpg'
import './Sponsors.css'


export default function Sponsors() {
  return (
    <div className="main-marquee-container">
      
        <h1 className="marquee-title">Sifarişçilər</h1>

      <div className="marquee-container">
        <Marquee speed={100} gradient={true} gradientWidth={600} pauseOnHover={true}>
          
            <div className="marquee-1">
              <img src={img1} alt='sifarisci1' />
            </div>

            <div className="marquee-2">
              <img src={img2} alt='sifarisci2' />
            </div>

            <div className="marquee-3">
              <img src={img3} alt='sifarisci3' />
            </div>

            <div className="marquee-4">
              <img src={img4} alt='sifarisci4' />
            </div>

            <div className="marquee-5">
              <img src={img5} alt='sifarisci5' />
            </div>

            <div className="marquee-6">
              <img src={img6} alt='sifarisci6' />
            </div>

            <div className="marquee-7">
              <img src={img7} alt='sifarisci7' />
            </div>

            <div className="marquee-8">
              <img src={img8} alt='sifarisci8' />
            </div>
          
        </Marquee>
      </div>

    </div>
  )
}
