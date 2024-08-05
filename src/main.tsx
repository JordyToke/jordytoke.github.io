import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import Root, { loader as rootLoader } from './routes/root';
import ErrorPage from './routes/error-page';
import ViteReact from './routes/viteReact';
import Contact from './routes/contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// create our react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "about/vite+react",
        element: <ViteReact />,
      },
      // {
      //   path: "blog",
      //   element: <Blog />,
      // },
      // {
      //   path: "projects",
      //   element: <Projects />,
      // },
      // {
      //   path: "utilities",
      //   element: <Utilities />,
      // },
      {
        path: "utilities/contacts/:contactId",
        element: <Contact />,
      },
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
