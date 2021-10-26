import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";

function subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="button_checkout">
        <strong>Proceed To Checkout</strong>
      </button>
    </div>
  );
}

export default subtotal;
