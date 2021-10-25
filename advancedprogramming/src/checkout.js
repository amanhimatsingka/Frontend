import React from "react";
import "./checkout.css";
import image from "./photos/5092428.jpg";
import Subtotal from "./subtotal";

function checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_img" src={image} />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {/* basket item */}
          {/* basket item */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default checkout;
