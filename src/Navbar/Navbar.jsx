import { Link, Outlet } from 'react-router-dom'
import {navLinks} from './navLinks'
import MenuItems from './MenuItems'
import conco_logo from './concologo-white-removedbg.png'
import './Navbar.css'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

function Header() {  

  return (
    <>

      <header className="navbar-container">
        <nav className='nav-area'>

          <div className="logo-wrapper">
            <Link to="/">
              <img src={conco_logo} alt="conco_logo" width={100} />
            </Link>
          </div>

          <ul className="menus">
            
            {navLinks && navLinks.map((navLink, index) => {

              return(
                <MenuItems navigationLinks={navLink} index={index} key={index}/>
              )
            })}

          </ul>
        </nav>
      </header>
      <Breadcrumbs/>

      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Header