//@ts-check
import "./App.css";
import ItemListContainer from "./components/home/ItemListContainer";
import ItemDetailContainer from "./components/product/ItemDetailContainer";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/contexts/CartContext.jsx";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Footer from "./components/layout/Footer";

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
            <Route path={`/cart`} element={<Cart />} />
            <Route path={`/checkout`} element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
