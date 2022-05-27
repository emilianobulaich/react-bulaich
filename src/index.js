//@ts-check
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyCRKthq9qTcKPC1yqbvqjgwKGYiQcI4b7E",
  authDomain: "react-bulaich.firebaseapp.com",
  projectId: "react-bulaich",
  storageBucket: "react-bulaich.appspot.com",
  messagingSenderId: "762663427025",
  appId: "1:762663427025:web:c52f48d17cbfbd29465ef0",
});

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
