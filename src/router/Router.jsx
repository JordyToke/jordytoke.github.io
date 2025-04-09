import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Utilities from "../pages/Utilities";
import Projects from "../pages/Projects.jsx";
import WD13 from "../pages/WD13.jsx";
import Contact from "../pages/Contact.jsx";
import NoPage from "../pages/NoPage.jsx";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Projects/*" element={<Projects />}>
          <Route path="WD13" element={<WD13 />} />
        </Route>
        <Route path="Utilities/*" element={<Utilities />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router