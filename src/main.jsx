import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StaticRoot from "./components/static-root/StaticRoot";
import Home from "./components/home/Home";
import AllToys from "./components/all-toys/AllToys";
import Register from "./authentication/register/Register";
import Login from "./authentication/login/Login";
import Provider from "./authentication/provider/Provider";
import Blog from "./components/blog/Blog";
import MyToys from "./components/my-toys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StaticRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://legends-toy-universe-server-gitsbyimran.vercel.app/toys"
          ),
      },
      {
        path: "alltoys",
        element: <AllToys />,
      },
      {
        path: "mytoys",
        element: <MyToys />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blog",
        element: <Blog />,
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
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
