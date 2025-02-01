import React from "react";
import { Route, Routes } from "react-router";

const PageRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="Blog" element={<Blog />} />
    <Route path="Projects" element={<Projects />}>
    </Route>
    <Route path="Utilities" element={<Utilities />}>
      <Route index element={<UtilitiesHome />} />
      <Route path="Todo/:todoId" element={<Todo />} />
    </Route>
    <Route path="About" element={<About />} />
    <Route path="Contact" element={<Contact />} />
    <Route path="*" element={<NoPage />} />
  </Routes>
);

export default PageRoutes;