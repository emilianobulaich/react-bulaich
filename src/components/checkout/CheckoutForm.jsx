//@ts-check
import React, { useState /* , useEffect */ } from "react";
import { Box, TextField, Button, Paper, Typography } from "@mui/material";
import { serverTimestamp } from "firebase/firestore";
export default function CheckoutForm({ totalPrice, cart, addOrder }) {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialForm);

  const order = {
    buyer: form,
    items: cart,
    total: totalPrice,
    date: serverTimestamp(),
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrder(order);
    }
  };
  const validate = () => {
    setFormErrors({ name: "", phone: "", email: "" });
    let validation = true;
    const errors = {};
    // eslint-disable-next-line
    const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    // eslint-disable-next-line
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!order.buyer.name) {
      errors.name = "Debe ingresar un nombre válido!";
      validation = false;
    }
    if (!order.buyer.phone || !regexPhone.test(order.buyer.phone)) {
      errors.phone = "Debe ingresar un teléfono válido!";
      validation = false;
    }
    if (!order.buyer.email || !regexEmail.test(order.buyer.email)) {
      errors.email = "Debe ingresar un email válido!";
      validation = false;
    }
    setFormErrors(errors);
    return validation;
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          width: "25ch",
          minHeight: "14vh",
          display: "flex",
          flexDirection: "column",
        },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Paper
        elevation={10}
        sx={{
          m: "25px auto",
          p: "35px",
          maxWidth: "500px",
        }}
      >
        <Typography variant="h5" marginY={4}>
          Complete el siguiente formulario para finalizar su compra!
        </Typography>
        <TextField
          required
          name="name"
          label="Nombre"
          variant="standard"
          onChange={handleChange}
          value={form.name}
          helperText={formErrors.name}
          error={formErrors.name ? true : false}
        />
        <TextField
          required
          name="email"
          label="Email"
          variant="standard"
          onChange={handleChange}
          value={form.email}
          helperText={formErrors.email}
          error={formErrors.email ? true : false}
        />
        <TextField
          required
          name="phone"
          label="Teléfono"
          variant="standard"
          onChange={handleChange}
          value={form.phone}
          helperText={formErrors.phone}
          error={formErrors.phone ? true : false}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mb: 4,
            backgroundColor: "#1976d2",
          }}
        >
          Enviar
        </Button>
      </Paper>
    </Box>
  );
}
