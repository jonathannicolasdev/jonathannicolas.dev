import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import OldWebsite from "./routes/old";

import "./styles/tailwind.css";
import IndexRoute from "./routes/index";

const router = createBrowserRouter([
  { path: "/", element: <IndexRoute /> },
  { path: "/old", element: <OldWebsite /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
