import React from "react";
import "./product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function product({ title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="proct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />

      <button>
        <strong>ADD TO BASKET</strong>
        <div className="button_cart">
          <ShoppingCartIcon />
        </div>
      </button>
    </div>
  );
}

export default product;
