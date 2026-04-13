import { useState, useEffect } from "react";
import * as api from "../api/productApi";

export const getAllProducts = () => {
  let [products, updateProduct] = useState([]);
  const productsData = async () => {
    const data = await api.getAllProducts();
    updateProduct(data);
  };
  useEffect(() => {
    productsData();
  }, []);

  return { products, productsData };
};
