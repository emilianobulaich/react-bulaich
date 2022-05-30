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
  getDoc,
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
  const [loading, setLoading] = useState(false);
  const [productosCarritos, setProductosCarrito] = useState(undefined);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();

    const coleccion = collection(db, "orders");

    addDoc(coleccion, productosCarritos).then(({ id }) => setOrderId(id));
    setExito(true);

    productosCarritos.items.map((item) => {
      return updateDoc(doc(db, "products", item.id), {
        stock: item.stock - item.quantity,
      });
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

  useEffect(() => {
    const order = {
      buyer: form,
      items: [...productosAgregados],
      total: totalPrice,
    };
    const getProducts = () => {
      const db = getFirestore();

      if (orderId !== undefined) {
        const Carrito = doc(db, "orders", orderId);

        getDoc(Carrito).then((snapshot) => {
          console.log(snapshot);
          setProductosCarrito({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setProductosCarrito(order);
      }
    };
    getProducts();
  }, [orderId, form, productosAgregados, totalPrice]);
  return (
    <>
      {loading ? (
        <>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      ) : productosAgregados.length > 0 || orderId !== undefined ? (
        exito && productosCarritos ? (
          <>
            {console.log(productosCarritos)}
            <Stack sx={{ width: "100%" }}>
              <Alert severity="success">Compra realizada con éxito!</Alert>
              <Paper
                sx={{ m: "0 auto", mt: "30px", width: "50%", p: "20px" }}
                elevation={5}
              >
                <h2>Datos del cliente: </h2>
                <p>ID de orden: {orderId}</p>
                <p>
                  El nombre del comprador es: {productosCarritos.buyer.name}
                </p>
                <h2>Detalle de productos: </h2>
                {productosCarritos.items.map((item) => (
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
