import React, { createContext, useState, useEffect } from "react";
import { Stack, Alert } from "@mui/material";
import { updateStocks } from "../../firebase/requests";
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
    let newItem = isInCart(item.id);

    if (newItem !== -1) {
      if (cart[newItem].quantity + cantidad <= item.stock) {
        setTotalQuantityLocalStorage(totalQuantity + cantidad);
        setTotalQuantity(totalQuantity + cantidad);
        let newCart = [...cart];
        newCart[newItem].quantity += cantidad;

        setCart([...newCart]);
        setCartLocalStorage([...newCart]);
        setTotalPriceLocalStorage(
          newCart[newItem].price * newCart[newItem].quantity
        );
        setTotalPrice(newCart[newItem].price * newCart[newItem].quantity);
        updateStocks(newCart);
      } else {
        <Stack sx={{ width: "100%" }}>
          <Alert severity="error">"Stock insuficiente!"</Alert>
        </Stack>;
      }
    } else {
      console.log("else");
      item.quantity = cantidad;
      setCartLocalStorage([...cart, item]);
      setCart([...cart, item]);
      setTotalQuantityLocalStorage(totalQuantity + item.quantity);
      setTotalQuantity(totalQuantity + item.quantity);

      setTotalPriceLocalStorage(item.price * item.quantity + totalPrice);

      console.log("precio: ", item.price);

      console.log("cantidad: ", item.quantity);

      setTotalPrice(item.price * item.quantity + totalPrice);

      console.log(totalPrice);
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
    setTotalPrice(0);
    setTotalPriceLocalStorage(0);
  };

  const isInCart = (itemId) => {
    let item = cart.find((e) => e.id === itemId);

    return cart.indexOf(item);
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
