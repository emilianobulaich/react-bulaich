//@ts-check
import React, { useState, useEffect } from "react";
import { Alert, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Backdrop, CircularProgress } from "@mui/material";
import { listaItems } from "../../db/listaItems";

export default function ItemListContainer(/* { greeting } */) {
  const [listado, setListado] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
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
  }, [categoryId]);

  if (error) {
    return (
      <>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            Error al intentar cargar los productos!
          </Alert>
        </Stack>
      </>
    );
  }

  return (
    <div>
      {/* Hola {greeting} */}
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {listado && (
        <>
          <ItemList items={listado} />
        </>
      )}
    </div>
  );
}
