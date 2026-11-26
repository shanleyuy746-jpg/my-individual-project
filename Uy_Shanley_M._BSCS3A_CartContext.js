import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [saving, setSaving] = useState(false);

  const addItem = (product) => {
    setSaving(true);
    setTimeout(() => {
      setItems((prev) => {
        const found = prev.find((i) => i.id === product.id);
        if (found) {
          return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
        }
        return [...prev, { ...product, qty: 1 }];
      });
      setSaving(false);
    }, 1000);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, saving, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}