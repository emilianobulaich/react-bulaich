//@ts-check
import "./App.css";
import ItemListContainer from "./components/home/ItemListContainer";
import ItemDetailContainer from "./components/product/ItemDetailContainer";
import NavBar from "./components/home/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/contexts/CartContext.jsx";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer /* greeting="Juan" */ />}
            />
            <Route path={`/item/:id`} element={<ItemDetailContainer />} />
            <Route
              path={`/category/:categoryId`}
              element={<ItemListContainer /* greeting="Juan "*/ />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
