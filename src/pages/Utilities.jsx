import React from "react";
import { Outlet, Routes, Route } from "react-router";
import UtilitiesHome from "./UtilitiesHome.jsx";
import Todo from "./Todo.jsx";

export default function Utilities() {
  return (
    <>
      <Routes>
        <Route index element={<UtilitiesHome />} />
        <Route path="Todo/:todoId" element={<Todo />} />
      </Routes>
      <Outlet />
    </>
  );
}
