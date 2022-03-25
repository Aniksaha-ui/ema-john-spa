import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    // console.log("product loading.......");
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    // console.log(storedCart);
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      // console.log(addedProduct);
      if (addedProduct) {
        console.log(storedCart[id]);
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }

    setCart(savedCart);
  }, [products]);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.id}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
