import './Navbar.css'
import MenuItems from "./MenuItems";
import { useState } from 'react';

export default function Dropdown({sublinks, dropdown, depthLevel}) {


  depthLevel += 1
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {sublinks && sublinks.map((sublink, index) => (
        <MenuItems navigationLinks={sublink} key={index} depthLevel={depthLevel}/>
      ))}
    </ul>
  )
}

{/* <li className="menu-items" key={index}>
          <NavLink to={sublink.url}>{sublink.title}</NavLink>
        </li> */}