import React from "react";
import Product from "./ShopComponents/Product";
import "./HomeScreen.css";

const homescreen = () => {
  return (
    <div className="homescreen">
      <h2 className="homescreen_title">최신상품</h2>
      <div className="homescreen_products">
        <Product />
      </div>
    </div>
  );
};

export default homescreen;
