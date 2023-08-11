import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/error-not-found";
import { Typography } from "./pages/typography";
import { Logos } from "./pages/logos";
import { Home } from "./pages/home";

const router = createBrowserRouter(
  [
    {
      path: "/typography",
      element: <Typography />,
    },
    {
      path: "/logos",
      element: <Logos />,
    },
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/portfolio/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
