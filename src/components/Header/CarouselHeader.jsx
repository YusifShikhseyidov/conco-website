import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import swiper library styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import your styles
import "./CarouselHeader.css";

// import swiper-carousel images
import { imagesAndTitles } from "./images";

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
            <h1 className="swiper-no-swiping swiper-heading">{obj.title}</h1>
            <img src={obj.img} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
