//@ts-check
import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
  Alert,
  Paper,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  collection,
  addDoc,
  getFirestore,
  updateDoc,
  doc,
} from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";

export default function Checkout() {
  const { productosAgregados, totalPrice, clear } = useContext(CartContext);

  const initialForm = {
    name: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState(initialForm);
  const [exito, setExito] = useState(false);
  const [orderId, setOrderId] = useState(undefined);
  const [orden, setOrden] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const order = {
      buyer: form,
      items: [...productosAgregados],
      total: totalPrice,
    };
    setOrden(order);
  }, [form, totalPrice]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    const db = getFirestore();

    const coleccion = collection(db, "orders");
    e.preventDefault();
    addDoc(coleccion, orden).then(({ id }) => setOrderId(id));
    setExito(true);
    let orderDoc;

    orden.items.map((item) => {
      return (
        (orderDoc = doc(db, "products", item.id)),
        updateDoc(orderDoc, { stock: item.stock - item.quantity })
      );
    });
    activeLoading();
    clear();
  };

  const activeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : productosAgregados.length > 0 || orderId !== undefined ? (
        exito && orden ? (
          <>
            <Stack sx={{ width: "100%" }}>
              <Alert severity="success">Compra realizada con éxito!</Alert>
              <Paper
                sx={{ m: "0 auto", mt: "30px", width: "50%", p: "20px" }}
                elevation={5}
              >
                <h2>Datos del cliente: </h2>
                <p>ID de orden: {orderId}</p>
                <p>El nombre del comprador es: {orden.buyer.name}</p>
                <h2>Detalle de productos: </h2>
                {orden.items.map((item) => (
                  <>
                    <p key={item.id}>
                      {item.title} x {item.quantity}
                    </p>
                  </>
                ))}
                <h2>Total:</h2>
                <p>${totalPrice}</p>
              </Paper>

              <Button
                size="large"
                variant="contained"
                sx={{ m: "0 auto", mt: 2 }}
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
          </>
        ) : (
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 4, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div>
              <TextField
                required
                name="name"
                label="Nombre"
                onChange={handleChange}
                value={form.name}
              />
              <TextField
                required
                name="email"
                label="Email"
                onChange={handleChange}
                value={form.email}
              />
              <TextField
                required
                name="phone"
                label="Teléfono"
                onChange={handleChange}
                value={form.phone}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 4,
                backgroundColor: "#1976d2",
              }}
            >
              Comprar
            </Button>
          </Box>
        )
      ) : (
        <>
          <Alert severity="error">No tiene productos en el carrito</Alert>
        </>
      )}
    </>
  );
}
