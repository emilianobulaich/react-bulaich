//@ts-check
import React, { createContext, useState } from "react";

export const CartContext = createContext(undefined);

export default function CartProvider({ children }) {
  const [productosAgregados, setProductosAgregados] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const addItem = (item, cantidad) => {
    let respuesta = productosAgregados.find((e) => e.id === item.id);

    if (respuesta) {
      alert("Elemento ya ingresado");
      item.quantity = item.quantity + cantidad;

      setProductosAgregados([...productosAgregados]);
    } else {
      item.quantity = cantidad;
      setProductosAgregados([...productosAgregados, item]);
    }
    setTotalQuantity(totalQuantity + item.quantity);
  };

  const removeItem = (item) => {
    let respuesta = productosAgregados.filter((e) => e.id !== item.id);

    if (respuesta) {
      alert("Producto eliminado");
      setTotalQuantity(totalQuantity - item.quantity);
      setProductosAgregados([...respuesta]);
    } else {
      alert("No se pudo eliminar el producto del carrito");
    }
  };

  const clear = () => {
    setProductosAgregados([]);
    setTotalQuantity(0);

    alert("Array vaciado");
  };

  let values = { addItem, removeItem, clear, totalQuantity };
  return (
    <>
      <CartContext.Provider value={values}>{children}</CartContext.Provider>;
    </>
  );
}
