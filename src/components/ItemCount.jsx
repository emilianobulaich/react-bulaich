import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };
  const handleRestar = () => {
    setCantidad(cantidad - 1);
  };
  return (
    <Card variant="outlined" sx={{ maxWidth: 345, m: "auto" }}>
      <CardMedia
        component="img"
        alt="Auto"
        height="240"
        image="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_12aa5deef3794cc4ad0dfcd88426ef17.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Alfa Romeo Giulia
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Alfa vuelve a las fuentes con el Giulia, un sedán que se planta de
          frente a sus archirrivales germanos ofreciendo estilo, pasión,
          velocidad y el regreso de la marca a la tracción trasera en sus autos.
          Impresiona manejar el Quadrifoglio con su V6 bi-turbo derivado de un
          Ferrari V8.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          size="large"
          variant="contained"
          onClick={handleRestar}
          disabled={cantidad === 1}
        >
          -
        </Button>
        <Button size="large">{cantidad}</Button>
        <Button
          size="large"
          variant="contained"
          onClick={handleSumar}
          disabled={cantidad === stock}
        >
          +
        </Button>
      </CardActions>
      <CardActions>
        <Button
          size="large"
          variant="outlined"
          onClick={() => onAdd(cantidad)}
          fullWidth
        >
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
}
