//@ts-check
import * as React from "react";
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
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "./CartWidget";

const settings = ["Perfil", "Cuenta", "Salir"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar position="static" sx={{ background: "#232323" }} style={{}}>
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
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/category/procesador"
                  style={() => ({
                    color: "#000",
                    textDecoration: "none",
                  })}
                >
                  <Typography textAlign="center">Procesadores</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/category/gabinete"
                  style={() => ({
                    color: "#000",
                    textDecoration: "none",
                  })}
                >
                  <Typography textAlign="center">Gabinetes</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/category/motherboard"
                  style={() => ({
                    color: "#000",
                    textDecoration: "none",
                  })}
                >
                  <Typography textAlign="center">Motherboards</Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
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
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "flex" }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/category/procesador"
                  style={() => ({
                    color: "#fff",
                    textDecoration: "none",
                  })}
                >
                  <Typography textAlign="center">Procesadores</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/category/gabinete"
                  style={() => ({
                    color: "#fff",
                    textDecoration: "none",
                  })}
                >
                  <Typography textAlign="center">Gabinetes</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/category/motherboard"
                  style={() => ({
                    color: "#fff",
                    textDecoration: "none",
                  })}
                >
                  <Typography textAlign="center">Motherboards</Typography>
                </NavLink>
              </MenuItem>
            </Button>
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
};
export default NavBar;
