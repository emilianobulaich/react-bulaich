import "./App.css";
/* import ItemListContainer from "./components/home/ItemListContainer"; */
import ItemDetailContainer from "./components/product/ItemDetailContainer";
import NavBar from "./components/home/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer greeting="Juan" /> */}
      <ItemDetailContainer />
    </>
  );
};

export default App;
