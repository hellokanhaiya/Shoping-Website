import React, { useState } from "react";
import ProductItem from "./ProductItem";

const Apps = () => {
  const products = [
    { id: 1, name: "Product 1", price: 10, quantity: 0 },
    { id: 2, name: "Product 2", price: 20, quantity: 0 },
    { id: 3, name: "Product 3", price: 30, quantity: 0 },
  ];

  const [cart, setCart] = useState(products);

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const increment = (productId) => {
    const item = cart.find((product) => product.id === productId);
    const newQuantity = item.quantity + 1;
    updateQuantity(productId, newQuantity);
  };

  const decrement = (productId) => {
    const item = cart.find((product) => product.id === productId);
    if (item.quantity > 0) {
      const newQuantity = item.quantity - 1;
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          increment={increment}
          decrement={decrement}
        />
      ))}
    </div>
  );
};

export default Apps;
