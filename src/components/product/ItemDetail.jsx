import React from "react";
import "@fontsource/roboto/300.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
/* import CardActions from "@mui/material/CardActions"; */

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ItemCount from "./ItemCount";
export default function ItemDetail({ item, onAdd }) {
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
          <CardMedia
            component="img"
            alt="Auto"
            height="auto"
            image={item.pictureUrl}
            sx={{ width: "50%" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="h4" color="text.primary">
              {item.price}
            </Typography>
          </CardContent>
          <Divider orientation="vertical" flexItem />
          <Divider />
          <ItemCount initial={1} stock={10} onAdd={onAdd} />
          {/* <CardActions
            sx={{
              width: "100%",
              m: "0 auto !important",
              display: "flex !important",
              flexDirection: "column !important",
              justifyContent: "center !important",
              alignItems: "center !important",
            }}
          >
            {<Button size="large" variant="contained" sx={{ width: "90%" }}>
              Comprar ahora
            </Button>
            <Button
              size="large"
              variant="text"
              sx={{
                backgroundColor: "#D6EAF9",
                m: "0 auto !important",
                mt: "10px !important",
                width: "90%",
              }}
            >
              Añadir al carrito
            </Button>}
          </CardActions> */}
        </Card>
        <Typography variant="body2" color="text.secondary" p="2rem">
          <h1>Descripción</h1>
          {item.description}
        </Typography>
      </Box>
    </>
  );
}
