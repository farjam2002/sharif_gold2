// File: src/context/CartContext.jsx
// ACTION: Create this new file and paste the code below.

import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the context itself
const CartContext = createContext();

// 2. Create a custom hook for easy access to the context
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Create the Provider component
export const CartProvider = ({ children }) => {
  // State to hold the items in the cart. We initialize it from localStorage to persist cart data.
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('sharifGoldCart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not parse cart data from localStorage", error);
      return [];
    }
  });

  // Persist cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('sharifGoldCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If it exists, increase the quantity by 1
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it's a new item, add it with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Function to update the quantity of a product
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // If quantity becomes 0 or less, remove the item
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Calculate total items count for the badge in the header
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // The value that will be available to all consuming components
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartItemCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
