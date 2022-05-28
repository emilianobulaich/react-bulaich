//@ts-check
import React, { useState, useContext } from "react";
import { Box, TextField, Button, Stack, Alert } from "@mui/material";
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

  const order = {
    buyer: form,
    items: [...productosAgregados],
    total: totalPrice,
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    const db = getFirestore();
    setExito(true);
    const coleccion = collection(db, "orders");
    e.preventDefault();
    addDoc(coleccion, order);
    let orderDoc;

    order.items.map((item) => {
      return (
        (orderDoc = doc(db, "products", item.id)),
        updateDoc(orderDoc, { stock: item.stock - item.quantity }),
        clear()
      );
    });
  };

  return (
    <>
      {exito ? (
        <Stack sx={{ width: "100%" }}>
          <Alert severity="success">"Compra realizada con éxito!"</Alert>
          <Button size="large" variant="contained" sx={{ m: "0 auto", mt: 2 }}>
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
      )}
    </>
  );
}
