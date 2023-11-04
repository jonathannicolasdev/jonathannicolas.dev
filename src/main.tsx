import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayoutRoute from "./routes/root";
import IndexRoute from "./routes/index";
import CVRoute from "./routes/cv";
import OldWebsite from "./routes/old";

import "./styles/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutRoute />,
    children: [
      { path: "/", element: <IndexRoute /> },
      { path: "/cv", element: <CVRoute /> },
    ],
  },

  { path: "/old", element: <OldWebsite /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
