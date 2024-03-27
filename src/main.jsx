import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./Pages/Notfound/Notfound";
import Users from "./Pages/Users/Users";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
