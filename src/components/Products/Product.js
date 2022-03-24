import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // console.log(props);
  const { handleAddToCart, product } = props;
  const { name, seller, category, price, stock, ratings, img } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name.slice(0, 10)}</h6>
        <p>Price : {price}</p>
        <p>
          <small>Manufacture : {seller}</small>
        </p>
        <p>
          <small>Rateing: {ratings}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="cart-button">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
