import React, { useState, useEffect } from "react";

const CartComponent = () => {
  // Initialize cart state from localStorage or use an empty array if no data is found
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);

  // Update localStorage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const updatedProduct = { ...product, quantity: 1 };
    setCart((prevCart) => [...prevCart, updatedProduct]);
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Function to remove a product from the cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to remove all products from the cart
  const removeAllItems = () => {
    setCart([]);
  };

  // Function to calculate the total price of the items in the cart
  const getTotalPrice = () => {
    return cart
      .reduce((total, product) => {
        const price = parseFloat(product.discountPrice.replace("$", ""));
        return total + price * product.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      <h1>Products</h1>
      <button
        onClick={() =>
          addToCart({ id: 1, title: "Product 1", discountPrice: "$100" })
        }
      >
        Add Product 1
      </button>
      <button
        onClick={() =>
          addToCart({ id: 2, title: "Product 2", discountPrice: "$200" })
        }
      >
        Add Product 2
      </button>

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.discountPrice} x {item.quantity}
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${getTotalPrice()}</p>
          <button onClick={removeAllItems}>Remove all</button>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
