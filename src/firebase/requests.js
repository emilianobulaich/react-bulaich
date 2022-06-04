import {
  addDoc,
  updateDoc,
  query,
  where,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

import { db } from "./db";

export const getProducts = async (categoryId = null) => {
  let q;
  if (categoryId) {
    q = query(collection(db, "products"), where("category", "==", categoryId));
  } else {
    q = query(collection(db, "products"));
  }
  try {
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const getProduct = async (id) => {
  const order = doc(db, "orders", id);
  try {
    const snapshot = await getDoc(order);
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      return product;
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const SaveOrder = async (order) => {
  const coleccion = collection(db, "orders");
  try {
    const { id } = await addDoc(coleccion, order);
    return id;
  } catch (err) {
    console.log("Error:", err);
  }
};
export const updateStock = async (productosCarritos) => {
  productosCarritos.items.map((item) => {
    return updateDoc(doc(db, "products", item.id), {
      stock: item.stock - item.quantity,
    });
  });
};
/* productosCarritos.items.map((item) => {
    return updateDoc(doc(db, "products", item.id), {
      stock: item.stock - item.quantity,
    });
  }); */

/* activeLoading();
  clear(); */
