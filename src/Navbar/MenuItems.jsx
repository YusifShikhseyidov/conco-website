import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {IoIosArrowDown} from "react-icons/io"

export default function MenuItems({ navigationLinks, depthLevel }) {
  // creating a state for dropdown links
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    const handleOutsideClick = (e) => {
      if(open && !e.target.closest('.dropdowm')){
        setOpen(false)
      }
    }

    window.addEventListener('click', handleOutsideClick)

    return ()=>{
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [open])


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
        <div className="dropdowm">
          <button
            className={open ? "isActive" : ""}
            type="button"
            aria-haspopup="menu"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen(!open)}
          >
            {navigationLinks.title} <IoIosArrowDown className={open ? "menuIsActivated" : "menuIsDeactivated"}/>

          </button>
          {open && (
            <div className="dropdown-nav-subelements">
              <ul>
                {navigationLinks.subLinks &&
                  navigationLinks.subLinks.map((subLinkItem, index) => (
                    <li key={index} onClick={()=> setOpen(!open)}>
                      <NavLink to={subLinkItem.url}>
                        {subLinkItem.title}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        // otherwise just a navbar link
        <NavLink to={navigationLinks.url}>{navigationLinks.title}</NavLink>
      )}
    </li>
  );
}

{
  /* <li className="nav-menu-links" key={index}>
  <NavLink to={navLink.url}>{navLink.title}</NavLink>
</li> */
}
