import React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";
export default function ItemList({ items }) {
  return (
    <>
      <Grid container justifyContent="center">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Grid>
    </>
  );
}
