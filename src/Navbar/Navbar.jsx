import { Link, Outlet } from 'react-router-dom'
import {navLinks} from './navLinks'
import MenuItems from './MenuItems'
import conco_logo from './concologo-white-removedbg.png'
import './Navbar.css'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import { useState, useEffect, useRef } from 'react'

function Header() {
  const [show, setShow] = useState(false)
  const hamburgerMenuRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (show && !e.target.closest(".hamburgerMenu")) {
        setShow(false);
      }
      if (hamburgerMenuRef.current && !hamburgerMenuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [show, hamburgerMenuRef]);

  return (
    <>
      <header className="navbar-container">
        <nav className="nav-area">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={conco_logo} alt="conco_logo" width={100} />
            </Link>
          </div>

          <div
            className="hamburgerMenu"
            ref={hamburgerMenuRef}
            onClick={() => setShow(!show)}
          >
            <span className={show ? "lineTopSpin" : ""}></span>
            <span className={show ? "lineMiddleSpin" : ""}></span>
            <span className={show ? "lineBottomSpin" : ""}></span>
          </div>

          <ul className={`menus ${show ? "open" : ""}`}>
            {navLinks &&
              navLinks.map((navLink, index) => {
                return <MenuItems navigationLinks={navLink} key={index} />;
              })}
          </ul>
        </nav>
      </header>
      <Breadcrumbs />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header