import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import ItemList from "./ItemList";
import LinearProgress from "@mui/material/LinearProgress";
import { listaItems } from "../../db/listaItems";

export default function ItemListContainer(/* { greeting } */) {
  /* 
  const [listado, setListado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* 
  Para probar que pasa al pasarle una lista vacía como parametro a la funcion "fetchListado"

  const listaFalsa = [];
*/

  const fetchListado = (listado) => {
    const traerListado = new Promise((res, rej) => {
      setLoading(true);
      setError(false);
      setTimeout(() => {
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

  useEffect(() => {
    fetchListado(listaItems);
  }, []);

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
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      {listado && <ItemList items={listaItems} />}
    </div>
  );
}
