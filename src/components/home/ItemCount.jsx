import * as React from "react";

import CardActions from "@mui/material/CardActions";

import Button from "@mui/material/Button";

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
    <>
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
    </>
  );
}
