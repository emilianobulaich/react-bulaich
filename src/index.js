//@ts-check
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*
useEffect(() => {
  const db = getFirestore();
  const productosCollection = collection(db, "productos");
  getDocs(productosCollection).then(({ docs }) => {
    setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });
}, []);

useEffect(() => {
  const db = getFirestore();

  const q = query(
    collection(db, "productos"),
    where("price", ">", 1000),
    where("category", "==", "gabinete")
  );

  getDocs(q).then(({ docs }) => {
    setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });
}, []);
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
