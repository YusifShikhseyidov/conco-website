// import styles
import "./CarouselHeader.css";

import { useEffect, useState } from "react";

// import data fetched from api
import useFetch from "../hooks/useFetch";

// Arrow Icons
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function CarouselHeader() {
  const {data, loading, error} = useFetch("slider-images-headings?populate=*")
  const sortedData = [...data].sort((a,b)=> a.id - b.id)

  console.log(sortedData)
  console.log(data)

  // active slide
  const [activeIndex, setActiveIndex] = useState(0)

  // functions to set sliding to left & right
  const slideLeft = ()=>{
    activeIndex===0 ? setActiveIndex(sortedData.length-1) : setActiveIndex(activeIndex-1)
  }

  const slideRight = ()=>{
    activeIndex===sortedData.length-1 ? setActiveIndex(0) : setActiveIndex(activeIndex+1)
  }

  useEffect(()=>{
    const timer = setTimeout(() => {
      slideRight()
    }, 4000);

    // cleanup function to clear the timer
    return ()=> clearTimeout(timer)
  }, [activeIndex])

  return (
    <div className="slider">
      {loading && <div className="loader"></div>}
      {error && <div>error...</div>}
      <div className="slider-wrapper">
        {/* map data to slides */}
        {!loading && !error && data && sortedData?.map((obj, index) => (
          <div className={index===activeIndex ? 'slider-card slider-card_active' : 'slider-card'} key={obj.id}>
            <img src={obj.attributes.slider_img.data[0].attributes.url} loading="lazy" alt={`slide-${obj.id}`} />
            <div className="card-overlay">
              <h1 className='card-title'>
                {obj.attributes.slider_heading}
              </h1>
            </div>
          </div>
        ))}
        <div className="slide-left-button" onClick={slideLeft}><SlArrowLeft /></div>
        <div className="slide-right-button" onClick={slideRight}><SlArrowRight /></div>
        <div className="carousel-pagination">
          {sortedData.map((_, index)=>(
            <div 
              key={index}
              className={
                index===activeIndex ? "pagination-dot pagination-dot_active" : "pagination-dot"
              }
              onClick={()=> setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
