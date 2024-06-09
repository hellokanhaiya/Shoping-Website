// src/contexts/ProductContext.js
import React, { createContext, useState, useEffect } from "react";
import product from "../../FeaturedCourse/MainContent/Secondcol/Product/nothing1"; // adjust the path to your data file

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load products data
    setProducts(product);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <ProductContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};
