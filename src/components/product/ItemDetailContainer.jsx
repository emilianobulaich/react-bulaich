import React, { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { getProduct } from "../../firebase/requests";
import Loading from "../home/Loading";
export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [item, setItem] = useState(undefined);
  const { id } = useParams();

  const getItem = async (id) => {
    setLoading(true);
    const item = await getProduct(id);
    item !== undefined ? setItem(item) : setError(true);

    setLoading(false);
  };
  useEffect(() => {
    getItem(id);
  }, [id]);
  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        item && error === false && <ItemDetail item={item} />
      )}
    </>
  );
}
