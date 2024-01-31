import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";

export default function MenuItems({ navigationLinks, index }) {
  // creating a state for dropdown links
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (open && !e.target.closest(".dropdowm")) {
        setOpen(false);
      }
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [open,wrapperRef]);

  // function onMouseEnter(){
  //   setDropdown(true)
  // }

  // function onMouseLeave(){
  //   setDropdown(false)
  // }

  return (
    <li
      className="menu-items"
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
    >
      {/* if any of the links has dropdown links */}
      {navigationLinks.subLinks ? (
        <ul className="dropdowm" ref={wrapperRef}>
          <li
            className={open ? "isActive" : ""}
            aria-haspopup="menu"
            aria-expanded={open ? "true" : "false"}
            onClick={()=> setOpen(!open)}
          >
            {navigationLinks.title}{" "}
            <IoIosArrowDown className={open ? "menuIsActivated" : "menuIsDeactivated"}/>
          </li>
            {open && (
              <ul className="dropdown-nav-subelements">
                {navigationLinks?.subLinks &&
                  navigationLinks?.subLinks?.map((subLinkItem, index) => (
                    <li key={index} onClick={() => setOpen(!open)}>
                      <NavLink to={subLinkItem.url}>
                        {subLinkItem.title}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            )}
        </ul>
      ) : (
        // otherwise just a navbar link
        <NavLink to={navigationLinks.url}>{navigationLinks.title}</NavLink>
      )}
    </li>
  );
}
