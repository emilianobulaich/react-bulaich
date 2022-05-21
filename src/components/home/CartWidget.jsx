import React from "react";
import { NavLink } from "react-router-dom";
import { Badge, Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartWidget() {
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
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </IconButton>
        </NavLink>
      </Box>
    </>
  );
}
