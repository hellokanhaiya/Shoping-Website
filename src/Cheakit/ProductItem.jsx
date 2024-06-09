import React from "react";

const ProductItem = ({ product, increment, decrement }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={() => increment(product.id)}>+</button>
      <button onClick={() => decrement(product.id)}>-</button>
    </div>
  );
};

export default ProductItem;
