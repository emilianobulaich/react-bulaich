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
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { getProduct, SaveOrder, updateStock } from "../../firebase/requests";

export default function Checkout() {
  const { productosAgregados, totalPrice, clear } = useContext(CartContext);

  const initialForm = {
    name: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState(initialForm);
  /*  const [formErrors, setFormErrors] = useState({}); */
  const [isSubmit, setIsSubmit] = useState(false);
  const [orderId, setOrderId] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [productosCarritos, setProductosCarritos] = useState(undefined);

  const activeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const LoadOrder = async () => {
      const id = await SaveOrder(productosCarritos);
      setOrderId(id);
    };
    LoadOrder();
    updateStock(productosCarritos);
    activeLoading();
    setIsSubmit(true);
    clear();

    /*
    setFormErrors(validate(form)); */

    /* if (validate(form).length === 0) {
      SaveOrder();
    } */
    /* setIsSubmit(true); */
    /* if (Object.keys(formErrors).length === 0 && isSubmit) {
      
    } */
  };

  /* const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Nombre requerido";
    }
    if (!values.email) {
      errors.email = "Email requerido";
    }
    if (!values.phone) {
      errors.phone = "Telefono requerido";
    }
    return errors;
  }; */

  useEffect(() => {
    const order = {
      buyer: form,
      items: [...productosAgregados],
      total: totalPrice,
    };
    const getListados = async () => {
      if (orderId !== undefined) {
        const product = await getProduct(orderId);
        setProductosCarritos(product);
        console.log(product, "Hola");
      } else {
        setProductosCarritos(order);
        console.log(order, "Chau");
      }
    };
    getListados();

    /* const SaveOrder = () => {
      const db = getFirestore();

      const coleccion = collection(db, "orders");

      addDoc(coleccion, productosCarritos).then(({ id }) => setOrderId(id));

      productosCarritos.items.map((item) => {
        return updateDoc(doc(db, "products", item.id), {
          stock: item.stock - item.quantity,
        });
      });

      activeLoading();
      clear();
    }; */

    /* if (Object.keys(formErrors).length === 0 && isSubmit) {
      SaveOrder();
    } */
  }, [form, /*  formErrors, */ productosAgregados, totalPrice, orderId]);
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
        isSubmit && productosCarritos /* &&
        Object.keys(formErrors).length === 0 */ ? (
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
                  <p key={item.title}>
                    {item.title} x {item.quantity}
                  </p>
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
              <Typography variant="p" color="error" pb="1rem">
                {/* {formErrors.name} */}
              </Typography>
              <TextField
                required
                name="email"
                label="Email"
                onChange={handleChange}
                value={form.email}
              />
              <Typography variant="p" color="error" pb="1rem">
                {/*  {formErrors.email} */}
              </Typography>
              <TextField
                required
                name="phone"
                label="Teléfono"
                onChange={handleChange}
                value={form.phone}
              />
              <Typography variant="p" color="error" pb="1rem">
                {/* {formErrors.phone} */}
              </Typography>
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
