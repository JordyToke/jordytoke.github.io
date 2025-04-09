import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import Router from "./router/Router";
import SEO from "./SEO";
import "./base.css";


const helmetContext = {};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
        <SEO title="Jordys Webfolio" description="Jordy Toke's Portfolio Website" locale="en_AU" author="Jordy Toke" />
    </HelmetProvider>
    <Router />
  </StrictMode>
);
