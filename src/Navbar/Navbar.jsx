import { Link, Outlet } from 'react-router-dom'
import {navLinks} from './navLinks'
import MenuItems from './MenuItems'
import conco_logo from './concologo-white-removedbg.png'
import './Navbar.css'
import { useState, useEffect, useRef } from 'react'
import { useLocale } from '../components/LocaleContext'

import { useTranslation } from 'react-i18next'

function Header() {

  const {t, i18n} = useTranslation('common', {useSuspense: true})

  const navlinks = t("navlinks", {returnObjects: true})
  console.log(navlinks)

  const {changeLocale} = useLocale()

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
            {navlinks &&
              navlinks.map((navLink, index) => {
                return <MenuItems navigationLinks={navLink} key={index} />;
              })}
          </ul>

          {/* language switcher */}
          <select onChange={(e)=>changeLocale(e.target.value)}>
            <option value="az-Latn">AZ</option>
            <option value="en">EN</option>
            <option value="ru-RU">RU</option>
          </select>

        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header