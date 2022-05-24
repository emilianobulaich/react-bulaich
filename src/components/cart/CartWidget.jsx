import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Badge, Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../contexts/CartContext";

export default function CartWidget() {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
      <Box sx={{ flexGrow: 0, mx: 1 }}>
        <NavLink
          to="/cart"
          style={() => ({
            width: "100%",
            color: "#fff",
            textDecoration: "none",
          })}
        >
          <IconButton
            size="large"
            aria-label="show 4 new notifications"
            color="inherit"
            sx={{}}
          >
            <Badge badgeContent={totalQuantity} color="error">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </IconButton>
        </NavLink>
      </Box>
    </>
  );
}
