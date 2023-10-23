import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Navbar.css";

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

  // const menuRef = useRef();
  
  // window.addEventListener('click', (e)=>{
  //   if(e.target !== menuRef.current){
  //     setOpen(!open)
  //   }
  // })

  // function onMouseEnter(){
  //   setDropdown(true)
  // }

  // function onMouseLeave(){
  //   setDropdown(false)
  // }
  // window.addEventListener('click', (e)=>{
  //   if(e.target !== dropdownRef.current){
  //     setDropdown(!drop)
  //   }
  // })

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
            type="button"
            aria-haspopup="menu"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen(!open)}
          >
            {navigationLinks.title}
            {!open ? (
              <ion-icon name="chevron-down-outline"></ion-icon>
            ) : (
              <ion-icon name="chevron-up-outline"></ion-icon>
            )}

            {/* {!dropdown && (
              <div className="dropdown-icon">
                <span></span>
                <span></span>
              </div>
            ) } */}

            {/* {depthLevel >= 0 && <span className="arrow"/>} */}
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
          {/* <Dropdown
            sublinks={navigationLinks.subLinks}
            dropdown={dropdown}
            depthLevel={depthLevel}
          /> */}
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
