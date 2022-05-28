//@ts-check
import React, { useState, useEffect } from "react";
/* import { Alert, Stack } from "@mui/material"; */
/* import { Backdrop, CircularProgress } from "@mui/material";
import { listaItems } from "../../db/listaItems"; */
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
export default function ItemListContainer(/* { greeting } */) {
  const [listado, setListado] = useState([]);
  /* const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); */

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let q;
    if (categoryId) {
      q = query(
        collection(db, "products"),
        where("category", "==", categoryId)
      );
    } else {
      q = query(collection(db, "products"));
    }

    getDocs(q).then((snapshot) => {
      setListado(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [categoryId]);

  /* useEffect(() => {
    const db = getFirestore();

    const producto = doc(db, "products", "EgdfBEao1mDgi7VmHs6g");
    getDoc(producto).then((snapshot) => {
      if (snapshot.exists()) {
        setListado([{ id: snapshot.id, ...snapshot.data() }]);
      }
    });
  }, []); */
  /* useEffect(() => {
    const fetchListado = (listado) => {
      const traerListado = new Promise((res, rej) => {
        setLoading(true);
        setError(false);
        setTimeout(() => {
          if (categoryId) {
            listado = listado.filter((lista) => lista.category === categoryId);
          }
          if (listado.length > 0) {
            res(listado);
          } else {
            rej("No se pudieron cargar los productos");
          }
        }, 2000);
      });

      traerListado
        .then((res) => {
          setListado(res);
        })
        .catch((err) => setError(err))
        .finally(() => {
          setLoading(false);
        });
    };
    fetchListado(listaItems);
  }, [categoryId]); */

  /* if (error) {
    return (
      <>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            Error al intentar cargar los productos!
          </Alert>
        </Stack>
      </>
    );
  } */

  return (
    <>
      {/* Hola {greeting} */}
      {/* {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )} */}
      {listado && (
        <>
          <ItemList items={listado} />
        </>
      )}
    </>
  );
}
