import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {Fade} from "react-awesome-reveal"

// import swiper library styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import your styles
import "./CarouselHeader.css";


// import swiper-carousel images
import {imagesAndTitles} from "./images";


export default function CarouselHeader() {
  return (
    <div className="container">
      <Swiper
        className="slides-container"
        modules={[Navigation, Pagination, Autoplay]}
        speed={1000}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpointsBase="container"
      >
        {imagesAndTitles.map((obj, index) => (
          <SwiperSlide className="img-container" key={index}>
            <Fade direction="left" delay={1000}>
              <h1 className="swiper-no-swiping">{obj.title}</h1>
            </Fade>
            <img src={obj.img} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
