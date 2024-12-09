import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./SEO.jsx";
import "./index.css";
import App from "./App.jsx";

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        <App>
          <SEO title="Jorbys World" description="Jordy Toke's Portfolio Website" locale="en_AU" />
        </App>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
