import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img
          src="https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483__340.jpg"
          alt="자전거사진임의저장"
        />
      </div>
      <Link to={`/product/${111}`} className="cartitem_name">
        <p>Product 1</p>
      </Link>
      <p className="cartitem_price">$499.99</p>
      <select className="cartitem_select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartitem_deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
