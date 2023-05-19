import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StaticRoot from "./components/static-root/StaticRoot";
import Home from "./components/home/Home";
import AllToys from "./components/all-toys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StaticRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "alltoys",
        element: <AllToys />,
      },
    ],
  },
  {
    path: "*",
    element: <h2>error</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
