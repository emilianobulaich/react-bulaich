import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "@fontsource/roboto/300.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Grid,
  Button,
} from "@mui/material";

import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
export default function ItemDetail({ item }) {
  const [activarCount, setActivarCount] = useState(true);

  const { addItem, removeItem, clear } = useContext(CartContext);

  const onAdd = (cantidad) => {
    alert(`Agregando ${cantidad} productos al carrito`);
    setActivarCount(false);
    addItem(item, cantidad);
  };

  return (
    <>
      <Box
        sx={{
          width: "60%",
          m: "0 auto",
          mt: "20px",
          boxShadow: 5,
          borderRadius: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            display: { xs: "block", lg: "flex" },
          }}
        >
          <Box width="100%">
            <CardMedia
              component="img"
              alt="Auto"
              height="auto"
              image={item.pictureUrl}
            />
          </Box>
          <Divider orientation="vertical" flexItem />

          <CardContent
            sx={{
              m: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="text.primary"
                >
                  {item.title}
                </Typography>
              </Grid>
              <Grid item xs={12} mb="2rem">
                <Typography variant="h5" color="#1976d2">
                  Precio: {item.price}
                </Typography>
              </Grid>
              <Grid item xs={12} mb="2rem">
                <Typography variant="h5" color="#232323">
                  Cantidad Disponible: {item.stock}
                </Typography>
              </Grid>
              {activarCount ? (
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
              ) : (
                <>
                  <Button
                    size="large"
                    variant="text"
                    fullWidth
                    sx={{
                      backgroundColor: "#D6EAF9",
                      mt: "10px !important",
                    }}
                  >
                    <NavLink
                      to="/"
                      style={() => ({
                        width: "100%",
                        color: "#1976d2",
                        textDecoration: "none",
                      })}
                    >
                      Seguir comprando
                    </NavLink>
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
                    <NavLink
                      to="/cart"
                      style={() => ({
                        width: "100%",
                        color: "#fff",
                        textDecoration: "none",
                      })}
                    >
                      Ir al carrito
                    </NavLink>
                  </Button>
                  <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    sx={{
                      m: "0 auto !important",
                      mt: "10px !important",
                    }}
                    onClick={() => removeItem(item)}
                  >
                    Eliminar este producto del arreglo
                  </Button>
                  <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    sx={{
                      m: "0 auto !important",
                      mt: "10px !important",
                    }}
                    onClick={clear}
                  >
                    Vaciar arreglo
                  </Button>
                </>
              )}
            </Grid>
          </CardContent>
        </Card>
        <Box p="2rem">
          <Typography variant="h4" color="text.primary" pb="1rem">
            Características
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {item.description.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
