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
// import { imagesAndTitles } from "./images";

// import data from api
import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function CarouselHeader() {
  const {data, loading, error} = useFetch("slider-images-headings?populate=*")

  console.log(data)

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="container">
      {loading && <div>loading...</div>}
      {error && <div>error...</div>}
      <Swiper
        onSlideChange={(element)=>setActiveIndex(element.activeIndex)}
        className="slides-container"
        modules={[Navigation, Pagination, Autoplay]}
        speed={1000}
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpointsBase="container"
      >
        {data && data?.map((obj, index) => (
          <SwiperSlide className="img-container" key={obj.id}>
            <h1 className={`swiper-no-swiping ${activeIndex === index ? "swiper-heading" : ""}`}>{obj.attributes.slider_heading}</h1>
            <img src={obj.attributes.slider_img.data[0].attributes.url} alt={`slide-${obj.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
