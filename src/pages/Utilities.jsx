import React from "react";
import { Outlet, Routes, Route, NavLink, Link } from "react-router";
import Todo from "./Todo.jsx";

export default function Utilities() {
  return (
    <>
      <NavLink to="Todo">ToDo App</NavLink>
      <a target="_self" href="http://jordytoke.com/Decryptor">Decryptor</a>
    </>
  );
}
