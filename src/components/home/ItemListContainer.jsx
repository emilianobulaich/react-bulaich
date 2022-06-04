//@ts-check
import React, { useState, useEffect } from "react";
/* import { Alert, Stack } from "@mui/material"; */
/* import { Backdrop, CircularProgress } from "@mui/material";
import { listaItems } from "../../db/listaItems"; */
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../../firebase/requests";

export default function ItemListContainer(/* { greeting } */) {
  const [listado, setListado] = useState([]);
  /* const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); */

  const { categoryId } = useParams();

  useEffect(() => {
    const getListado = async () => {
      const productos = await getProducts(categoryId);
      setListado(productos);
    };
    getListado();
  }, [categoryId]);

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
