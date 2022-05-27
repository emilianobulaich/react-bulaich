//@ts-check
import React, { useState, useEffect } from "react";
/* import { Alert, Stack, Backdrop, CircularProgress } from "@mui/material"; */
/* import { listaItems } from "../../db/listaItems"; */
/* import { listaProcesadores, listaGabinetes } from "../../db/listaProcesadores"; */
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { doc, getDoc, getFirestore } from "firebase/firestore";
export default function ItemDetailContainer() {
  /* const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); */

  const [item, setItem] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    if (id) {
      const producto = doc(db, "products", id);
      getDoc(producto).then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() });
      });
    } else {
      alert("no id");
    }
  }, [id]);

  /*  const fetchItem = (items, id) => {
    const traerItem = new Promise((res, rej) => {
      setLoading(true);
      setError(false);
      setTimeout(() => {
        if (items.length > 0) {
          let newItem = items.find((item) => item.id === parseInt(id));
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
        setItem(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItem(listaItems, id);
  }, [id]); */

  /*  if (error) {
    return (
      <>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">{error}!</Alert>
        </Stack>
      </>
    );
  } */

  return (
    <>
      {/* {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )} */}
      {item && <ItemDetail item={item} />}
    </>
  );
}
