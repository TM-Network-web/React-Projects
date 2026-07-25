import { createContext, useContext, useState } from "react"
import productData from "../data/data";
import { useMemo } from "react";

const ProductContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item into cart Logic
  const addToCart = (product) => {
    setCart((prevCart) => {
      const prodExist = prevCart.find(item => item.id === product.id);

      if (prodExist) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      } else {
        return [...prevCart, { ...product, qty: 1 }]
      }
    })
  }

  // Remove item from cart logic 
  const removeFromCart = (prodId, removeAll = false) => {

    setCart((prevCart) => {
      const prodExist = prevCart.find(item => item.id === prodId)

      if (!prodExist) return prevCart;

      if (removeAll || prodExist.qty === 1) {
        return prevCart.filter(item => item.id !== prodId)
      } else {
        return prevCart.map(item => item.id === prodId ? { ...item, qty: item.qty - 1 } : item)
      }

    })

  }

  // Clear Cart method 
  const clearCart = () => setCart([]);

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.qty, 0)
  }, [cart])

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0)
  })

  return (
    <ProductContext.Provider value={{ cart, productData, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
      {children}
    </ProductContext.Provider>
  )
}

const useCartContext = () => useContext(ProductContext);

export { CartContext, useCartContext }