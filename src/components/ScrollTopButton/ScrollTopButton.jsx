import { useEffect, useState } from 'react';
import './ScrollTopButton.css'
import { SlArrowUp } from "react-icons/sl";

export default function ScrollTopButton() {

  const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  }



  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>300){
        setShowButton(true)
      }else{
        setShowButton(false)
      }
    })
  }, [])

  return (
    <div className={`scrollup-container ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
      {showButton && (
        <SlArrowUp className='arrow-icon' />
      )}
    </div>
  )
}
