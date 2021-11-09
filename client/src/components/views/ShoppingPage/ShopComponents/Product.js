import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div className="product">
      <img
        src="https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483__340.jpg"
        alt="자전거"
      />
      <div className="product_info">
        <p className="info_name">Product 1</p>
        <p className="info_description">
          이것은 상품이다. 당신이 포인트로 살 수 있는 후후후
        </p>
        <p className="info_price">$500</p>
        <Link to={`/product/${1111}`} className="info_button">
          view
        </Link>
      </div>
    </div>
  );
};

export default Product;

// const ShopPage = ({ imageUrl, name, price, description }) => {
//   return (
//     <div>
//       <img src={imageUrl} alt={name} />
//       <p>{name}</p>
//       <p>{price}</p>
//       <p>{description}</p>
//       <Link to={`/product/${1111}`} className="button">
//         view
//       </Link>
//     </div>
//   );
// };
