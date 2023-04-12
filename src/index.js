import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import reportWebVitals from "./reportWebVitals";

// import views
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import AddView from "./views/Add";
import ProductPage from "./views/ProductPage/1";

//creat router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/about",
    element: <AboutView />,
  },
  {
    path: "/add",
    element: <AddView />,
  },
  {
    path: "/ProductPage/1",
    element: <ProductPage />,
  },
]);

console.log("router: ", router);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
