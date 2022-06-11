import React from "react";
import Item from "./Item";
import { Box, Grid } from "@mui/material";
export default function ItemList({ items }) {
  return (
    <Box container sx={{ minHeight: "70vh" }}>
      <Grid container justifyContent="center">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Grid>
    </Box>
  );
}
