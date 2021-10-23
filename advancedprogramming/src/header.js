// this code is for the header of the webpage

import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import image from "./logo-ashoka.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src={image}
        // http://pngimg.com/uploads/amazon/amazon_PNG11.png
      />
      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="header_searchicon" />
        {/* logo */}
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionone">Hello Guest</span>
          <span className="header_optiontwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionone">Return </span>
          <span className="header_optiontwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionone">Your</span>
          <span className="header_optiontwo">Prime</span>
        </div>

        <div className="header_optionbasket">
          <ShoppingBasketIcon />
          <span className=" header_optiontwo header_basketcount">0</span>
        </div>
      </div>
    </div>
  );
}

export default header;
