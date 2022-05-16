import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
/* import ItemCount from "./ItemCount"; */
import ItemList from "./ItemList";
import LinearProgress from "@mui/material/LinearProgress";

export default function ItemListContainer({ greeting }) {
  /* const onAdd = (cantidad) => alert(`Sumando ${cantidad} al carrito`); */
  const [listado, setListado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* 
  Para probar que pasa al pasarle una lista vacía como parametro a la funcion "fetchListado"
*/
  const listaFalsa = [];

  const listaItems = [
    {
      id: 1,
      title: "Alfa Romeo Giulia",
      description:
        "Alfa vuelve a las fuentes con el Giulia, un Sedán que se planta de frente a sus archirrivales germanos ofreciendo estilo, pasión, velocidad y el regreso de la marca a la tracción trasera en sus autos. Impresiona manejar el Quadrifoglio con su V6 bi-turbo derivado de un Ferrari V8",
      price: "$1100",
      pictureUrl:
        "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_12aa5deef3794cc4ad0dfcd88426ef17.jpg",
    },
    {
      id: 2,
      title: "Porsche 911",
      description:
        "Iconos por sí mismos: la legendaria silueta del 911 se une al carácter purista del Cronógrafo I. El modelo del aniversario, limitado a 750 ejemplares, combina el diseño atemporal de un vehículo deportivo con los elementos característicos de un reloj icónico y continúa así la historia de éxito del 911 y de una manufactura relojera única.",
      price: "$1200",
      pictureUrl: "https://wallpaperstock.net/wallpapers/thumbs1/57463wide.jpg",
    },
    {
      id: 3,
      title: "Toyota Avensis 2012",
      description:
        "El nuevo Toyota Avensis reduce sus acabados a dos para el público general denominados Advance y Executive, más un acabado pensado para las flotas llamado Comfort disponible sólo con un motor, ya que se espera que la mitad de las 3.000 unidades vendidas a partir de 2012 sean para flotas. Todos los acabados reciben mejoras de aspecto en el interior con más cromados, mejores tapicerías y terminaciones de estilo metálico que dan más vida.",
      price: "$2300",
      pictureUrl:
        "http://i.blogs.es/5e8f4b/toyota-avensis-2012-blanco-01/original.jpg",
    },
  ];

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
      {/* <ItemCount stock={10} initial={1} onAdd={onAdd} />; */}
      {loading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      {listado && <ItemList items={listaItems} />}
    </div>
  );
}
