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
import images from "./images";


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
      >
        {images.map((image, index) => (
          <SwiperSlide className="img-container" key={index}>
            <img src={image} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
