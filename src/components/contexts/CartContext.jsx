import React, { createContext, useState, useEffect } from "react";
import { Stack, Alert } from "@mui/material";

export const CartContext = createContext(undefined);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

  const getCartFromLocalStorage = () => {
    if (
      localStorage.getItem("cart") &&
      localStorage.getItem("totalQuantity") &&
      localStorage.getItem("totalPrice")
    ) {
      setCart(JSON.parse(localStorage.getItem("cart")));

      setTotalQuantity(JSON.parse(localStorage.getItem("totalQuantity")));

      setTotalPrice(JSON.parse(localStorage.getItem("totalPrice")));
    }
  };
  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      if (item.quantity + cantidad <= item.stock) {
        item.quantity += cantidad;
        setTotalQuantityLocalStorage(totalQuantity + cantidad);
        setTotalQuantity(totalQuantity + cantidad);
        setCart([...cart]);
        setCartLocalStorage([...cart]);
        setTotalPriceLocalStorage(item.price * item.quantity);
        setTotalPrice(item.price * item.quantity);
      } else {
        <Stack sx={{ width: "100%" }}>
          <Alert severity="error">"Stock insuficiente!"</Alert>
        </Stack>;
      }
    } else {
      item.quantity = cantidad;
      setCartLocalStorage([...cart, item]);
      setCart([...cart, item]);
      setTotalQuantityLocalStorage(totalQuantity + item.quantity);
      setTotalQuantity(totalQuantity + item.quantity);
      setTotalPriceLocalStorage(item.price * item.quantity + totalPrice);
      setTotalPrice(item.price * item.quantity + totalPrice);
    }
  };

  const removeItem = (item) => {
    let response = cart.filter((e) => e.id !== item.id);

    if (response) {
      setCart([...response]);
      setTotalQuantityLocalStorage(totalQuantity - item.quantity);
      setTotalQuantity(totalQuantity - item.quantity);
      setTotalPriceLocalStorage(totalPrice - item.price * item.quantity);
      setTotalPrice(totalPrice - item.price * item.quantity);
      setCartLocalStorage([...response]);
    }
  };

  const clear = () => {
    setCart([]);
    setCartLocalStorage([]);
    setTotalQuantity(0);
    setTotalQuantityLocalStorage(0);
    setTotalPriceLocalStorage(0);
  };

  const isInCart = (itemId) => {
    return cart.find((e) => e.id === itemId);
  };

  const setCartLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const setTotalQuantityLocalStorage = (totalQuantity) => {
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  };
  const setTotalPriceLocalStorage = (totalPrice) => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  };

  let values = {
    addItem,
    removeItem,
    clear,
    isInCart,
    totalQuantity,
    totalPrice,
    cart,
  };
  return (
    <>
      <CartContext.Provider value={values}>{children}</CartContext.Provider>
    </>
  );
}
