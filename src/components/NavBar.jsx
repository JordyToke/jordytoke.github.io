import React from "react";
import style from "./NavBar.module.css";

export default function NavBar() {

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Blog">Blog</a></li>
        <li><a href="/Projects">Projects</a></li>
        <li><a href="/Utilities">Utilities</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  )
}