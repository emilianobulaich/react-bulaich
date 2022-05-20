import React from "react";
import "@fontsource/roboto/300.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

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

              <ItemCount initial={1} stock={10} onAdd={onAdd} />
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
