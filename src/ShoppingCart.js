import React from "react";
import "./css/shoppingcart.css";
import { useNavigate } from "react-router";

function ShoppingCart({ cart, removeFromCart, updatedItem }) {
  const navigate = useNavigate();

  return (
    <div className="checkout">
      <h2>your shopping basket</h2>
      <div className="checkout-div grid grid-cols-1 md:grid-cols-3">
        <div className="checkout-left col-span-1 text-sm sm:text-sm  md:text-lg md:col-span-2">
          {cart.line_items.map((item) => {
            return (
              <div className="checkout-left-product" key={item.id}>
                <div className=" mr-4 sm:mr-6">
                  <img src={item.image.url} alt="item-img" />
                </div>
                <div className="cart-product-detail">
                  <p className="cart-product-name">{item.name}</p>
                  <p className="cart-product-price">
                    {item.price.formatted_with_symbol} * {item.quantity} =${" "}
                    {item.price.raw * item.quantity}
                  </p>
                  <div className="incre__decre">
                    <button
                      className="incre"
                      onClick={() => {
                        updatedItem(item.id, item.quantity + 1);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="decre"
                      onClick={() => {
                        updatedItem(item.id, item.quantity - 1);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className="remove-btn text-xs"
                    onClick={() => removeFromCart(item.id)}
                  >
                    remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="checkout-right col-span-1 md:col-span-1">
          <div className="checkout-right-content bg-green-300">
            <div className="subtotal-div">
              <p className="subtotal">
                subtotal<small>({cart.total_items} items) : </small>
                <strong>{cart.subtotal.formatted_with_symbol}</strong>
              </p>
              <p className="checkbox">
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </p>
            </div>
            <button
              className="proceed-btn"
              onClick={() => navigate("/checkout")}
            >
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
