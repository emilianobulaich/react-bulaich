import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../../firebase/requests";
import Loading from "../home/Loading";
export default function ItemListContainer() {
  const [productList, setProductList] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    const getProductsList = async () => {
      setLoading(true);
      const productos = await getProducts(categoryId);
      productos !== undefined ? setProductList(productos) : setError(true);
      setLoading(false);
    };
    getProductsList();
  }, [categoryId]);

  return (
    <>
      {loading && <Loading loading={loading} />}
      {productList && !error && (
        <>
          <ItemList items={productList} />
        </>
      )}
    </>
  );
}
