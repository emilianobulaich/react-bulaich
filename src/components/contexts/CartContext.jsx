//@ts-check
import React, { createContext, useState } from "react";

export const CartContext = createContext(undefined);

export default function CartProvider({ children }) {
  const [productosAgregados, setProductosAgregados] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      if (item.quantity + cantidad <= item.stock) {
        item.quantity += cantidad;
        setTotalQuantity(totalQuantity + cantidad);
        setProductosAgregados([...productosAgregados]);

        setTotalPrice(item.price * item.quantity);
      } else {
        alert("Stock insuficiente");
      }
    } else {
      item.quantity = cantidad;
      setProductosAgregados([...productosAgregados, item]);
      setTotalQuantity(totalQuantity + item.quantity);
      setTotalPrice(item.price * item.quantity + totalPrice);
    }
  };

  const removeItem = (item) => {
    let respuesta = productosAgregados.filter((e) => e.id !== item.id);

    if (respuesta) {
      alert("Producto eliminado");
      setProductosAgregados([...respuesta]);
      setTotalQuantity(totalQuantity - item.quantity);
      setTotalPrice(totalPrice - item.price * item.quantity);
    }
  };

  const clear = () => {
    setProductosAgregados([]);
    setTotalQuantity(0);

    alert("Array vaciado");
  };

  const isInCart = (itemId) => {
    return productosAgregados.find((e) => e.id === itemId);
  };

  let values = {
    addItem,
    removeItem,
    clear,
    isInCart,
    totalQuantity,
    totalPrice,
    productosAgregados,
  };
  return (
    <>
      <CartContext.Provider value={values}>{children}</CartContext.Provider>
    </>
  );
}
