import * as React from "react";

import CardActions from "@mui/material/CardActions";

import Button from "@mui/material/Button";

import { useState } from "react";
import { Box } from "@mui/system";

export default function ItemCount({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };
  const handleRestar = () => {
    setCantidad(cantidad - 1);
  };
  return (
    <Box sx={{ display: "flex", m: "0 auto", width: "100%" }}>
      <CardActions
        sx={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "center ",
          alignItems: "center",
        }}
      >
        <Box width="100%" display="flex " justifyContent="space-between">
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
        </Box>
        <Button
          size="large"
          variant="text"
          fullWidth
          sx={{ backgroundColor: "#D6EAF9", mt: "10px !important" }}
          onClick={() => onAdd(cantidad)}
        >
          Añadir al carrito
        </Button>
        <Button
          size="large"
          variant="contained"
          fullWidth
          sx={{
            m: "0 auto !important",
            mt: "10px !important",
          }}
        >
          Comprar ahora
        </Button>
      </CardActions>
    </Box>
  );
}
