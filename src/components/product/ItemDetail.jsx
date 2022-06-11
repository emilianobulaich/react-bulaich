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
  Alert,
} from "@mui/material";

import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
export default function ItemDetail({ item }) {
  const [activarCount, setActivarCount] = useState(true);

  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setActivarCount(false);
    addItem(item, cantidad);
  };

  return (
    <>
      <Box
        sx={{
          width: "60%",
          m: "0 auto",
          my: "20px",
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
              image={item.pictureURL}
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
              {item.stock === 0 ? (
                <Alert severity="error">"No hay stock!"</Alert>
              ) : activarCount ? (
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
              ) : (
                <>
                  <Button
                    size="large"
                    variant="text"
                    fullWidth
                    sx={{
                      backgroundColor: "#D6EAF9",
                      m: 0,
                      p: 0,
                      mt: "10px !important",
                    }}
                  >
                    <NavLink
                      to="/"
                      style={() => ({
                        width: "100%",
                        color: "#1976d2",
                        textDecoration: "none",
                        margin: 5,
                        padding: 5,
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
                      m: 0,
                      p: 0,
                      mt: "10px !important",
                    }}
                  >
                    <NavLink
                      to="/cart"
                      style={() => ({
                        width: "100%",
                        color: "#fff",
                        textDecoration: "none",
                        margin: 5,
                        padding: 5,
                      })}
                    >
                      Terminar compra
                    </NavLink>
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
            {console.log(item)}
            {item.description.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
