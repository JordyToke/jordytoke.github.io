import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {

  const links = [
  <NavLink to="/">Home</NavLink>,
  <NavLink to="/Blog">Blog</NavLink>,
  <NavLink to="/Projects">Projects</NavLink>,
  <NavLink to="/Utilities">Utilities</NavLink>,
  <NavLink to="/About">About</NavLink>,
  <NavLink to="/Contact">Contact</NavLink>
  ];

  const navList = links.map((link, index) => 
    <li key={index} style={{animationDelay:`${index * 100}ms` }}>{link}</li>
  )

  return (
    <nav className="navbar">
      <ul>
        {navList}
      </ul>
    </nav>
  )
}

export default NavBar;