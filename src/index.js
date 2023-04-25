import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import reportWebVitals from "./reportWebVitals";

// import views
import HomeView from "./views/HomeView";
import ProductPage from "./views/ProductPage/detail";
import Login from "./views/Login";
import SignUpView from "./views/Sign-up";
import CreditCard from "./views/CreditCard";
import FinishView from "./views/Finish";
import ComputerView from "./views/ComputerView";
import T1357 from "./views/T1357";

//creat router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/T1357",
    element: <T1357 />,
  },
  {
    path: "/Computer",
    element: <ComputerView />,
  },
  {
    path: "/ProductPage/detail",
    element: <ProductPage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Sign-up",
    element: <SignUpView />,
  },
  {
    path: "/CreditCard",
    element: <CreditCard />,
  },
  {
    path: "/Finish",
    element: <FinishView />,
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
