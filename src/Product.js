import React from "react";
import "./css/product.css";

function Product({ productsList, addToCart }) {
  return (
    <div className="w-full product">
      <div className="grid grid-cols-1 mt-20 pt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mt-0 lg:pt-0 flex pb-5">
        {productsList.map((items) => {
          return (
            <div className="product-img" key={items.id}>
              <img src={items.image.url} alt="product_img" />
              <div className="product-details">
                <p className="product-name">{items.name}</p>
                <p className="product-price">
                  {items.price.formatted_with_symbol}
                </p>
                <button
                  className="add-btn"
                  onClick={() => addToCart(items.id, 1)}
                >
                  add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
