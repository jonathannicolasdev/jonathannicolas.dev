import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import OldWebsite from "./routes/old";

import "./styles/tailwind.css";
import IndexRoute from "./routes/index";
import CVRoute from "./routes/cv";

const router = createBrowserRouter([
  { path: "/", element: <IndexRoute /> },
  { path: "/old", element: <OldWebsite /> },
  { path: "/cv", element: <CVRoute /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
