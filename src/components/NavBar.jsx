import React from "react";
import { NavLink } from "react-router";

export default function NavBar() {

  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Blog">Blog</NavLink></li>
        <li><NavLink to="/Projects">Projects</NavLink></li>
        <li><NavLink to="/Utilities">Utilities</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}