import React, { Suspense, lazy } from "react";
// import Header from "./Header";
// import ShoppingCart from "./ShoppingCart";
// import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Product from "./Product";
// import Footer from "./Footer";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";
const Header = lazy(() => import("./Header"));
const Product = lazy(() => import("./Product"));
const ShoppingCart = lazy(() => import("./ShoppingCart"));
const Checkout = lazy(() => import("./Checkout"));
const Footer = lazy(() => import("./Footer"));

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);

  // ---------fetch total products list-----------
  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProductsList(response.data);
  };

  // --------add items into shopping cart------------
  const addToCart = async (prodId, qty) => {
    const response = await commerce.cart.add(prodId, qty);
    setCart(response.cart);
  };

  // ---------fetch cart---------------------
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // ------------updated items------------
  const updatedItem = async (prodId, qty) => {
    const response = await commerce.cart.update(prodId, { qty });
    console.log(response.cart);
    // setCart(response.cart);
  };
  // ---------remove items from shopping cart------------
  const removeFromCart = async (proId) => {
    const response = await commerce.cart.remove(proId);
    setCart(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header cart={cart} />
        </Suspense>
        <Suspense fallback={<div>Loading Home...</div>}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <div className="w-full home">
                    <img
                      src="https://m.media-amazon.com/images/I/61NAdLjXLlL._SX3000_.jpg"
                      alt="banner_img"
                    />
                  </div>
                  <Product productsList={productsList} addToCart={addToCart} />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Suspense>
        <Suspense fallback={<div>Loading Cart...</div>}>
          <Routes>
            <Route
              exact
              path="/cart"
              element={
                <ShoppingCart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updatedItem={updatedItem}
                />
              }
            />
          </Routes>
        </Suspense>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
