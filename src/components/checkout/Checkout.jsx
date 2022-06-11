import React, { useState, useContext } from "react";
import { Button, Stack, Alert, Paper, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { saveOrder, updateStocks } from "../../firebase/requests";
import Loading from "../home/Loading";
import CheckoutForm from "./CheckoutForm";

export default function Checkout() {
  const { cart, totalPrice, clear } = useContext(CartContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [orderId, setOrderId] = useState(undefined);
  const [newOrder, setNewOrder] = useState(undefined);
  const [newTotalPrice, setNewTotalPrice] = useState(undefined);

  const addOrder = async (order) => {
    setLoading(true);
    const id = await saveOrder(order);
    if (id !== undefined) {
      setOrderId(id);
      updateStocks(order);
      setNewOrder(order);
      setNewTotalPrice(totalPrice);
      clear();
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <>
          <Loading loading={loading} />
        </>
      ) : cart.length > 0 || newOrder ? (
        newOrder !== undefined && error === false ? (
          <Box minHeight="70vh">
            <Stack sx={{ width: "100%" }}>
              <Alert severity="success">Compra realizada con éxito!</Alert>
              <Paper
                sx={{ m: "0 auto", mt: "30px", width: "50%", p: "20px" }}
                elevation={5}
              >
                <h2>Datos del cliente: </h2>
                <p>Cod. de orden: {orderId}</p>
                <p>Nombre: {newOrder.buyer.name}</p>
                <h2>Detalle de productos: </h2>
                {newOrder.items.map((item) => (
                  <p key={item.title}>
                    {item.title} - - - - C/U ${item.price} - - - - Cantidad:{" "}
                    {item.quantity}
                  </p>
                ))}
                <h2>Total:</h2>
                <p>${newTotalPrice}</p>
              </Paper>

              <Button
                size="large"
                variant="contained"
                sx={{ m: "0 auto", my: 2 }}
              >
                <NavLink
                  to="/"
                  style={() => ({
                    width: "100%",
                    color: "white",
                    textDecoration: "none",
                  })}
                >
                  Volver
                </NavLink>
              </Button>
            </Stack>
          </Box>
        ) : (
          <CheckoutForm
            totalPrice={totalPrice}
            cart={cart}
            addOrder={addOrder}
          />
        )
      ) : (
        <>
          <Alert severity="error" sx={{ minHeigth: "70vh" }}>
            No tiene productos en el carrito
          </Alert>
        </>
      )}
    </>
  );
}
