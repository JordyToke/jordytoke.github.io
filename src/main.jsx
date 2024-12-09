import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App>
          <Helmet prioritizeSeoTags>
            <title>Jorbys World</title>
            <meta property="og:title" content="Jorbys World" />
            <meta property="og:description" content="Jordy Toke's Portfolio Website" />
            <meta property="og:locale" content="en_AU" />
          </Helmet>
        </App>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
