import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper library styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import your styles
import "./CarouselHeader.css";

// import data from api
import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function CarouselHeader() {
  const {data, loading, error} = useFetch("slider-images-headings?populate=*")
  const sortedData = [...data].sort((a,b)=> a.id - b.id)

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="swiper">
      {loading && <div className="loader"></div>}
      {error && <div>error...</div>}
      <Swiper
        onSlideChange={(element)=>setActiveIndex(element.activeIndex)}
        className="swiper-wrapper"
        modules={[Navigation, Pagination, Autoplay]}
        speed={1000}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpointsBase="container"
      >
        {!loading && !error && data && sortedData?.map((obj, index) => (
          <SwiperSlide className="swiper-slide" key={obj.id}>
            <h1 className={`swiper-no-swiping ${activeIndex === index ? "swiper-heading" : ""}`}>{obj.attributes.slider_heading}</h1>
            <img src={obj.attributes.slider_img.data[0].attributes.url} alt={`slide-${obj.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
