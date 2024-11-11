import React from "react";
/*---------PAGES-------*/

import Home from "./pages/home.jsx";



/*---------STYLES-------*/

import './styles/header.css'
import './styles/default.css'
import './styles/homepage.css'
import './styles/footer.css'

/*---------DEFAULT COMPONENTS-------*/

import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);