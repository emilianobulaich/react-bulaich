import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function Item({ item }) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 390,
        m: 3,
        boxShadow: 5,
        textAlign: "center",
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        alt="Auto"
        height="240"
        image={item.pictureUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Precio: {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="outlined" fullWidth>
          Ver detalle del producto
        </Button>
      </CardActions>
    </Card>
  );
}
