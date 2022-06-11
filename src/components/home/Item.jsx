//@ts-check
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

export default function Item({ item }) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 350,
        m: 3,
        boxShadow: 5,
        textAlign: "center",
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        alt="Auto"
        height="300"
        image={item.pictureURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="h5" color="#1976d2" mt="10px">
          Precio: ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          variant="contained"
          fullWidth
          sx={{ m: "0px", p: "0px" }}
        >
          <NavLink
            to={`/item/${item.id}`}
            style={() => ({
              width: "100%",
              color: "white",
              textDecoration: "none",
              padding: "10px",
            })}
          >
            Ver detalle del producto
          </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
}
