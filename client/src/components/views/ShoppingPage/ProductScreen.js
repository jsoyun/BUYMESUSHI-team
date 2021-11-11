import React from "react";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen_left">
        <div className="left_image">
          <img
            src="https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483__340.jpg"
            alt="product name"
          ></img>
        </div>
      </div>
      <div className="left_info">
        <p className="left_name">product1</p>
        <p>price:$499</p>
        <p>description: 블라블라블라</p>
      </div>
      <div className="productscreen_right">
        <div className></div>
      </div>
      <div className="right_info">
        <p>
          price:<span>$499.99</span>
        </p>
        <p>
          Status:<span>In stock</span>
        </p>
        <p>
          Qty
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </p>
        <p>
          <button type="button">Add to cart</button>
        </p>
      </div>
    </div>
  );
};

export default ProductScreen;
