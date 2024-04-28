import { useEffect, useState } from "react";
import "./ScrollTopButton.css";
import { SlArrowUp } from "react-icons/sl";

export default function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const TIMINGFUNC_MAP = {
    linear: (t) => t,
    "ease-in": (t) => t * t,
    "ease-out": (t) => t * (2 - t),
    "ease-in-out": (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  };

  function scrollTopSmooth(initY, duration = 300, timingName = "linear") {
    const timingFunc = TIMINGFUNC_MAP[timingName];
    let start = null;
    const step = (timestamp) => {
      start = start || timestamp;
      const progress = timestamp - start,
        // Growing from 0 to 1
        time = Math.min(1, (timestamp - start) / duration);

      window.scrollTo(0, initY - timingFunc(time) * initY);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }

  // Subscribe any element with ".scrollup-container"
  Array.from(document.querySelectorAll(".scrollup-container")).forEach(
    (btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        scrollTopSmooth(window.scrollY, 2000, "ease-in-out");
      });
    }
  );

  return (
    <div className={`scrollup-container ${showButton ? "show" : ""}`}>
      {showButton && <SlArrowUp className="arrow-icon" />}
    </div>
  );
}
