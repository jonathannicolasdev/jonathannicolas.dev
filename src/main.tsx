import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayoutRoute from "./routes/root";
import IndexRoute from "./routes/index";
import CVRoute from "./routes/cv";
import AboutRoute from "./routes/about";
import ContactRoute from "./routes/contact";
import ProjectsRoute from "./routes/projects";
import OldWebsite from "./routes/old";

import "./styles/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutRoute />,
    children: [
      { path: "/", element: <IndexRoute /> },
      { path: "/cv", element: <CVRoute /> },
      { path: "/about", element: <AboutRoute /> },
      { path: "/contact", element: <ContactRoute /> },
      { path: "/projects", element: <ProjectsRoute /> },
    ],
  },

  { path: "/old", element: <OldWebsite /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
