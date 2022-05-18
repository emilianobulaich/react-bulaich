import React, { useState, useEffect } from "react";
import { Alert, Stack, Backdrop, CircularProgress } from "@mui/material";

import { listaItems } from "../../db/listaItems";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const onAdd = (cantidad) => alert(`Sumando ${cantidad} al carrito`);

  const fetchItem = (items, id) => {
    const traerItem = new Promise((res, rej) => {
      setLoading(true);
      setError(false);
      setTimeout(() => {
        if (items.length > 0) {
          let newItem = items.find((item) => item.id === id);
          if (newItem) {
            res(newItem);
          } else {
            rej("Producto no encontrado, intentar más tarde");
          }
        } else {
          rej("Listado vacío, intentar más tarde");
        }
      }, 2000);
    });

    traerItem
      .then((res) => {
        /* console.log(res); */
        setItem(res);
      })
      .catch((err) => {
        /* console.log("Error al cargar el item"); */
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    /* console.log(listaItems); */

    //Por ahora se hardcodea el id a ir a buscar
    fetchItem(listaItems, 1);
  }, []);

  if (error) {
    return (
      <>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">{error}!</Alert>
        </Stack>
      </>
    );
  }

  return (
    <div>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {item && <ItemDetail item={item} onAdd={onAdd} />}
    </div>
  );
}
