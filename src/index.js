import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Home from "./App";
import Aboutus from "./Pages/Aboutus";
import Companyprofile from "./Pages/AboutIBJ/Companyprofile";
import Companyhistory from "./Pages/AboutIBJ/Companyhistory";
import Marriagehunting from "./Pages/Services/marriagehunting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/aboutus",
    element: <Aboutus />,
  },

  {
    path: "aboutus/companyprofile",
    element: <Companyprofile />,
  },

  {
    path: "aboutus/companyhistory",
    element: <Companyhistory />,
  },

  {
    path: "/marriagehunting",
    element: <Marriagehunting />,
  },

]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();