//cart
import "./MyPage.css";
import React from "react";
import CartItem from "./ShopComponents/CartItem";

const MyPage = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen_left">
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cartscreen_right">
        <div className="cartscreen_info">
          <p>subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
