import React, { useContext } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Stack,
  Alert,
  Box,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import * as locales from "@mui/material/locale";

const columns = [
  {
    id: "title",
    label: "Producto",
    minWidth: 170,
  },
  {
    id: "quantity",
    label: "Cantidad",
    minWidth: 100,
    format: (value) => value.toLocaleString("es-ES"),
  },
  {
    id: "price",
    label: "Precio",
    minWidth: 170,
    align: "right",
  },
  {
    id: "button",
    label: "Acciones",
    minWidth: 170,
    align: "right",
  },
];

export default function Cart() {
  const { productosAgregados, removeItem, clear, totalPrice } =
    useContext(CartContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const theme = useTheme();

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales["esES"]),
    [theme]
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {productosAgregados.length > 0 ? (
        <>
          <Paper
            sx={{
              width: "80%",
              overflow: "hidden",
              boxShadow: 5,
              margin: "0 auto",
              mt: "50px",
            }}
          >
            <TableContainer sx={{ maxHeight: "70vh" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productosAgregados
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <>
                                  {column.id === "button" && (
                                    <Button
                                      size="small"
                                      variant="contained"
                                      sx={{
                                        backgroundColor: "red",
                                      }}
                                      onClick={() => removeItem(row)}
                                    >
                                      Borrar
                                    </Button>
                                  )}
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </>
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <Box display="flex" justifyContent={"flex-end"} alignItems="center">
              <Typography
                variant="subtitle1"
                component="div"
                color="#1976d2"
                mx={5}
              >
                Precio total: {totalPrice}
              </Typography>
              <Button
                size="small"
                variant="contained"
                sx={{
                  m: "10px",
                  backgroundColor: "red",
                }}
                onClick={clear}
              >
                Borrar todo
              </Button>
            </Box>
            <ThemeProvider theme={themeWithLocale}>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={productosAgregados.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </ThemeProvider>
          </Paper>
        </>
      ) : (
        <>
          <Stack sx={{ width: "100%" }}>
            <Alert severity="error">"No hay productos en el carrito!"</Alert>
            <Button size="large" variant="contained" sx={{ m: "0 auto" }}>
              <NavLink
                to="/"
                style={() => ({
                  width: "100%",
                  color: "white",
                  textDecoration: "none",
                })}
              >
                Volver
              </NavLink>
            </Button>
          </Stack>
        </>
      )}
    </>
  );
}
