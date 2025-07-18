import React from "react";
import { NavLink } from "react-router";
import styles from "./header.module.css";

const NavBar = () => {
  // lisk of Navigation Links
  const links = [
    {to: "/", title: "Jordy Toke"},
    {to: "/blog", title: "Blog"},
    {to: "/projects", title: "Projects"},
    {to: "/utilities", title: "Utilities"},
    {to: "/contact", title: "Contact"},
  ];

  // Map the navigation links to jsx list and add animation delay to consecutive items
  const navList = links.map((link, index) => 
    <li key={index} style={{animationDelay:`${index * 100}ms` }}>
      <NavLink className={styles.tablink} to={link.to} viewTransition>{link.title}</NavLink>
    </li>
  )

  // return the list of navigation links wrapped by <nav> and <ul>
  return (
    <nav>
      <ul>
        {navList}
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header>
      <NavBar />
    </header>
  )
}

export default Header;