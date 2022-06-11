import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "../cart/CartWidget";
import { getCategories } from "../../firebase/requests";

const settings = ["Perfil", "Cuenta", "Salir"];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [categories, setCategories] = useState([]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getAndSetCategories = async () => {
    const cat = await getCategories();

    setCategories(cat);
  };

  useEffect(() => {
    getAndSetCategories();
  }, []);

  return (
    <AppBar position="static" sx={{ background: "#232323", height: "10vh" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink
              to="/"
              style={() => ({
                width: "100%",
                color: "#fff",
                textDecoration: "none",
              })}
            >
              ZONO!
            </NavLink>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {categories
                ? categories.map(({ name, section }) => (
                    <div key={name}>
                      <MenuItem onClick={handleCloseNavMenu} key={section}>
                        <NavLink
                          to={`/category/${section}`}
                          style={() => ({
                            width: "100%",
                            color: "#000",
                            textDecoration: "none",
                          })}
                        >
                          <Typography textAlign="center">{name}</Typography>
                        </NavLink>
                      </MenuItem>
                    </div>
                  ))
                : console.log("error")}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink
              to="/"
              style={() => ({
                width: "100%",
                color: "#fff",
                textDecoration: "none",
              })}
            >
              ZONO!
            </NavLink>
          </Typography>
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box sx={{ my: 4, color: "white", display: "flex" }}>
              {categories.map(({ name, section }) => (
                <MenuItem onClick={handleCloseNavMenu} sx={{ m: "0", p: "0" }}>
                  <NavLink
                    to={`/category/${section}`}
                    style={() => ({
                      width: "100%",
                      color: "#fff",
                      textDecoration: "none",
                    })}
                  >
                    <Typography textAlign="center" mx="15px">
                      {name}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Box>
          </Box>
          <CartWidget />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
