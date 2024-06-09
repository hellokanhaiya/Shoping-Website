import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    const uniqueId = uuidv4(); // Generate unique ID
    const updatedProduct = { ...product, quantity, id: uniqueId }; // Assign unique ID to product
    saveCart([...cart, updatedProduct]);
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, product) => {
        const price = parseFloat(product.discountPrice.replace("$", ""));
        return total + price * product.quantity;
      }, 0)
      .toFixed(2);
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (idToRemove) => {
    const itemIndex = cart.findIndex((item) => item.id === idToRemove);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(itemIndex, 1);
      saveCart(updatedCart);
    }
  };

  const removeAllItems = () => {
    saveCart([]);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getTotalPrice,
        updateQuantity,
        removeItem,
        removeAllItems,
        isSidebarVisible,
        toggleSidebar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// import React, { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   const [isSidebarVisible, setIsSidebarVisible] = useState(true);

//   const saveCart = (updatedCart) => {
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const addToCart = (product, quantity = 1) => {
//     const existingProductIndex = cart.findIndex(
//       (item) => item.title === product.title
//     );
//     if (existingProductIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingProductIndex].quantity += quantity;
//       saveCart(updatedCart);
//     } else {
//       const updatedProduct = { ...product, quantity };
//       saveCart([...cart, updatedProduct]);
//     }
//   };

//   const getTotalPrice = () => {
//     return cart
//       .reduce((total, product) => {
//         const price = parseFloat(product.discountPrice.replace("$", ""));
//         return total + price * product.quantity;
//       }, 0)
//       .toFixed(2);
//   };

//   const updateQuantity = (id, quantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === id ? { ...item, quantity } : item
//     );
//     saveCart(updatedCart);
//   };

//   const removeItem = (idToRemove) => {
//     const itemIndex = cart.findIndex((item) => item.id === idToRemove);
//     if (itemIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart.splice(itemIndex, 1);
//       saveCart(updatedCart);
//     }
//   };

//   const removeAllItems = () => {
//     saveCart([]);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarVisible((prev) => !prev);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         getTotalPrice,
//         updateQuantity,
//         removeItem,
//         removeAllItems,
//         isSidebarVisible,
//         toggleSidebar,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
