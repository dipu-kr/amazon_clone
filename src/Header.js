import React from "react";
import "./css/header.css";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import Bottom_Header from "./Bottomheader";
import { Link } from "react-router-dom";
function Header({ cart }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 md:pb-4 top-header">
        {/* ------------logo div----------- */}
        <div className="col-span-1 md:col-span-1 md:order-1 lg:col-span-1 lg:order-1">
          <div className="logo lg:pt-2">
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMKUp-Asqa5avYwhksdCIWPlL0mpBMZ38DmgLXRT9ZHIon8yudB0TAIE9ASWHQS-D0m0&usqp=CAU"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        {/* -----------search div------------- */}
        <div className="col-span-1 md:col-span-4 md:order-2 lg:col-span-3 lg:order-2 flex justify-center align-center">
          <div className="header-input">
            <input type="text" />
            <span className="search-icon">
              <SearchIcon />
            </span>
          </div>
        </div>
        {/* ----------------cart div------------- */}
        <div className="col-span-1 mb-2 mt-2 md:col-span-3 md:order-1 md:justify-end lg:col-span-2 lg:order-3 flex justify-center items-center">
          <div className="header-nav">
            <p className="font-medium leading-3 text-white first-p md:text-lg">
              hello dipu
            </p>
            <p className="font-medium capitalize text-white text-sm sm:text-sm">
              sign in
            </p>
          </div>
          <div className="header-nav">
            <p className="font-medium leading-3 text-white first-p md:text-lg">
              returns
            </p>
            <p className="font-bold capitalize text-white text-sm sm:text-sm leading-6">
              & orders
            </p>
          </div>
          <div className="header-nav">
            <p className="font-medium leading-3 text-white first-p md:text-lg">
              your
            </p>
            <p className="font-bold capitalize text-white text-sm sm:text-sm">
              prime
            </p>
          </div>
          <div className="header-nav">
            <p className="text-white">
              <Link to="/cart">
                <div className="header-nav-cart">
                  <AddShoppingCart />
                  <span className="font-medium total-cart-items">
                    {cart.total_items}
                  </span>
                </div>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Bottom_Header />
    </>
  );
}

export default Header;
