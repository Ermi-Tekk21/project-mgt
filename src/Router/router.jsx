import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  PopularProducts,
  Hero,
  SignInPage,
  LogIn,
  LogedPopularProducts,
} from "../pages";
import RouteNotExist from "../pages/404/404";
import { CartCard } from "../components";

function CustomRouter() {
  const user = localStorage.getItem("curUser");
  const curUser = JSON.parse(user);

  return (
    <div>
      <Routes>
        <Route path="/" Component={Hero} />
        <Route path="/home" Component={Hero} />
        <Route path="/about-us" Component={About} />
        <Route path="/products" Component={PopularProducts} />
        <Route path="/contact-us" Component={Contact} />
        {curUser && (
          <>
          <Route path="/user-account/:name" Component={LogedPopularProducts} />
          <Route path="/user-account/:name/cart-page" Component={CartCard} />
          </>
          
        )}

        <Route path="/sign-in" Component={SignInPage} />
        <Route path="/log-in" Component={LogIn} />
        <Route path="*" Component={RouteNotExist} />
      </Routes>
    </div>
  );
}

export default CustomRouter;
