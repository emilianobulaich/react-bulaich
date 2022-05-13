import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  const onAdd = (cantidad) => alert(`Sumando ${cantidad} al carrito`);

  return (
    <>
      Hola {greeting}
      <ItemCount stock={10} initial={1} onAdd={onAdd} />;
    </>
  );
}
