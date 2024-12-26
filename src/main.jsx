import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./SEO.jsx";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const helmetContext = {};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
        <SEO title="Jordys Webfolio" description="Jordy Toke's Portfolio Website" locale="en_AU" />
    </HelmetProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route> 
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
