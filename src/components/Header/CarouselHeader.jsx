import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper library styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import your styles
import "./CarouselHeader.css";

// import swiper-carousel images
import { imagesAndTitles } from "./images";

// import data from api
import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function CarouselHeader() {
  const {data} = useFetch("slider-images-headings?populate=*")

  console.log(data)

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="container">
      <Swiper
        onSlideChange={(element)=>setActiveIndex(element.activeIndex)}
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
            <h1 className={`swiper-no-swiping ${Number(activeIndex)===index ? "swiper-heading" : ""}`}>{obj.title}</h1>
            <img src={obj.img} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
